import type { LessonData } from "../lesson-schema";

export default function LessonList({lessons}: {lessons: LessonData[]}) {
  const now = new Date();

  return (
		<ul className="space-y-4">
			{
				lessons.filter(lesson => (lesson.availableFrom ?? now) <= now).map((lesson) =>
					(
						<li key={lesson.id}>
							<a
								href={`/lessons/${lesson.id}`}
								className="text-xl text-blue-600 hover:underline"
							>
								{lesson.title}
							</a>
							<p className="text-gray-600">{lesson.description}</p>
						</li>
					),
				)
			}
		</ul>
  );
}