import {locale} from '../i18n';
import {feedbackPath} from '../../../../packages/content/feedback.mjs';

export function LessonFeedback({book, lesson, version, view = 'read'}: {book: string; lesson: string; version: string; view?: string}) {
  const english = locale === 'en';
  return <aside className="lesson-feedback" aria-label={english ? 'Improve this lesson' : '改进这一节'}>
    <div><strong>{english ? 'Something unclear or incorrect?' : '哪里没讲清楚，或发现了错误？'}</strong>
      <p>{english ? 'Send a specific suggestion. This lesson and version are filled in; nothing is submitted automatically.' : '告诉我们具体位置。本节与版本会自动填好，点击后由你决定提交。'}</p></div>
    <div className="lesson-feedback-actions"><a href={feedbackPath({book, lesson, version, view})}>{english ? 'Give feedback' : '反馈这一节'} ↗</a>
      <a href={`./books/${encodeURIComponent(book)}/${encodeURIComponent(lesson)}/`}>{english ? 'Readable & citable edition' : '正文与引用'} ↗</a></div>
  </aside>;
}
