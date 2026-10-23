# 成绩管理器：C17 完整练习项目

AI 编写，humanReviewed=false；项目代码 MIT。只需要 GCC 或 Clang，不需要 npm、网络、第三方 C 库。

把本目录全部文件放在同一个文件夹，在终端进入这个目录。Windows 使用 MSYS2 UCRT64（x86-64）；macOS 可把命令里的 gcc 换为 clang。

```sh
gcc -std=c17 -Wall -Wextra -Wpedantic main.c records.c input.c -o gradebook
./gradebook sample.txt
```

MSYS2 也可用 `./gradebook.exe sample.txt`。文件名参数来自 `main(int argc, char *argv[])`：argc 是参数个数，argv[0] 通常为启动名，argv[1] 是输入路径；项目只接受一个路径，使用前先检查 argc。

预期输出：

```text
count: 3
total: 247
mean: 82.33
passed: 2
Ada 100
Lin 88
Bo 59
```

规则：每行 `[A-Za-z]{1,20}`、一个空格、一个或多个数字；成绩 0..100，允许前导零，不允许正负号、额外空白、空行；姓名唯一、区分大小写，最多 100 人。接受 LF、CRLF、末行无换行；拒绝内嵌 NUL、63 字符以上的行。空文件有效，人数总分及格数为零，平均显示 n/a。报告按分数降序，同分按 strcmp 名字顺序。ASCII 名称算法面向本书 GCC/Clang 的常见 ASCII 兼容环境，不声称支持所有执行字符集和 Unicode 排序。

失败写 stderr 并非零退出；输入失败时不输出部分报告。`gb_load` 用临时表，在整份读取、解析与关闭成功后才替换已初始化的目标；失败保留原目标。`Gradebook` 是唯一拥有者，禁止随意按值复制；使用后 `gb_destroy`。接口入参须符合头文件契约，不验证任意野指针。

保存报告可用 `./gradebook sample.txt > report.txt`。shell 会预先创建或截断输出文件，**输出绝不能与输入为同一路径或其别名、符号链接、硬链接**。程序不写输入；不提供原子文件保存、并发访问或断电保护。

本地单元检查：

```sh
gcc -std=c17 -Wall -Wextra -Wpedantic test_records.c records.c input.c -o test_records
./test_records
```

支持 sanitizer 的 Clang/GCC 环境可在上述两条编译命令加入：

```text
-g -O1 -fsanitize=address,undefined -fno-omit-frame-pointer
```

在本仓库中还能运行 `npm run check:c`，包括逐片段编译输出比较、项目单元检查与外部文件用例；使用 `C_SANITIZE=1 npm run check:c` 请求 sanitizer 检查。Windows 工具链支持因版本不同，普通 C17 构建不依赖 sanitizer。

模块：records 管记录与内存；input 管文件与文本协议；main 管参数、报告和退出状态。练习代码为清楚可读而设计；100 人插入排序足够，扩容或更大规模需重审范围与代价。普通测试不模拟真实分配器耗尽、设备级读写失败或所有平台差异；详细证据见教材 QA.md。
