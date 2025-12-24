import type {LessonData} from '../lesson-schema';
import {withBase} from '../lib/paths';

export default function LessonList({
  lessons,
}: {
  readonly lessons: LessonData[];
}) {
  const now = new Date();
  return (
    <ul className="">
      {lessons
        .filter((lesson) => (lesson.availableFrom ?? now) <= now)
        .map((lesson) => (
          <li key={lesson.id}>
            <h2>
              <a href={withBase(`lessons/${lesson.id}`)} className="">
                {lesson.title}
              </a>
            </h2>
            <p className="">{lesson.description}</p>
          </li>
        ))}
    </ul>
  );
}
