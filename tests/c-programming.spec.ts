import {test,expect} from '@playwright/test';
import fs from 'node:fs';
const book=JSON.parse(fs.readFileSync('packages/content/c-programming/book.json','utf8'));
const ids:string[]=book.chapters.flatMap((ch:{lessons:string[]})=>ch.lessons);
const url=(tail='')=>'/?lang=zh#/book/c-programming'+(tail?'/'+tail:'');
test('all C lessons render complete reading and bounded case comparison',async({page})=>{
 test.setTimeout(120000);
 const errors:string[]=[];page.on('pageerror',e=>errors.push(e.message));
 for(const id of ids){
  await page.goto(url(id));
  await expect(page.locator('main h1')).toBeVisible();
  await expect(page.getByRole('heading',{name:'常见错误',exact:true})).toBeVisible();
  await expect(page.locator('.c-example')).toHaveCount(2);
  const data=JSON.parse(fs.readFileSync(`packages/content/c-programming/lessons/${id}.json`,'utf8'));
  const correct=data.learningCheck.correctIndex;
  await page.locator('.c-check button').nth(correct).click();
  await expect(page.locator('.c-check [role=status]')).toContainText('判断正确');
  await page.goto(url(id+'/experiment'));
  await page.getByRole('button',{name:'核对输出与步骤',exact:true}).click();
  await expect(page.locator('.c-lab')).toContainText('预期标准输出');
  await page.getByRole('button',{name:new RegExp('^案例 2：')}).click();
  await expect(page.locator('.c-lab')).not.toContainText('预期标准输出');
  await page.getByRole('button',{name:'核对输出与步骤',exact:true}).click();
  await expect(page.locator('.c-lab')).toContainText('预期标准输出');
  const overflow=await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth);
  expect(overflow,id).toBeFalsy();
 }
 expect(errors).toEqual([]);
});
test('C practice, progress, mobile navigation, sources and downloads',async({page,request},testInfo)=>{
 await page.goto(url('c-pointers/practice'));
 await expect(page.locator('.c-question')).toHaveCount(4);
 await page.locator('.c-question').first().getByText('查看提示',{exact:true}).click();
 await page.locator('.c-question').first().getByText('查看完整解答',{exact:true}).click();
 await expect(page.locator('.c-question').first()).toContainText('7');
 await page.getByRole('button',{name:'标记本节已读',exact:true}).click();
 await page.reload();
 await expect(page.getByRole('button',{name:'已标记读完 · 点击取消'})).toHaveAttribute('aria-pressed','true');
 if(testInfo.project.name==='mobile'){
  await page.getByRole('button',{name:'教材目录',exact:true}).click();
  await expect(page.locator('#c-directory')).toBeVisible();
  await page.getByRole('searchbox').fill('生命周期');
  await expect(page.locator('#c-directory nav a').first()).toContainText('生命周期');
  await page.keyboard.press('Escape');
  await expect(page.locator('#c-directory')).toBeHidden();
  await expect(page.getByRole('button',{name:'教材目录',exact:true})).toBeFocused();
 }
 await page.goto(url('review'));
 await expect(page.locator('.c-question')).toHaveCount(20);
 await page.goto(url('glossary'));
 await expect(page.locator('.c-glossary dt')).toHaveCount(32);
 await page.goto(url('project'));
 await expect(page.locator('.c-project-file')).toHaveCount(8);
 for(const file of ['C-Programming.md','c-programming.html','c-programming-examples.zip']){
  const response=await request.get('/'+file);expect(response.ok()).toBeTruthy();
  expect((await response.body()).length).toBeGreaterThan(10000);
 }
 await page.goto('/?lang=en#/book/c-programming');
 await expect(page.getByRole('heading',{name:'This book is available in Chinese.'})).toBeVisible();
});
test('C textbook is discoverable in the library and search',async({page})=>{
 await page.goto('/?lang=zh#/library');
 await expect(page.getByRole('link',{name:/C 语言：从零到完整程序/}).first()).toBeVisible();
 await page.goto('/?lang=zh#/search?q=realloc');
 await expect(page.locator('a[href*="book/c-programming/c-vector"]').first()).toBeVisible();
});
