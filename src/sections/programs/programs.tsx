import type { ProgramsProps } from "@/src/types";
import { PROGRAMS_BACKGROUND_COLOR, PROGRAMS_TEXT_COLOR } from "@/src/color";
import { PROGRAMS_TITLE_TYPOGRAPHY } from "@/src/typography";
const toHeadings = (html: string): string =>
    html.replace(
        /<p>\s*(?:<br\s*\/?>)?\s*((?:<strong>[\s\S]*?<\/strong>\s*)+)<\/p>/gi,
        (match, inner: string) => {
            const text = inner
                .replace(/<[^>]+>/g, "")
                .replace(/&nbsp;/g, " ")
                .trim();
            const isHeading =
                text.length > 0 &&
                text.length < 40 &&
                text === text.toUpperCase() &&
                !/[.:!?]$/.test(text);
            return isHeading ? `<h3 class="programs-subheading">${text}</h3>` : match;
        }
    );

const cleanHtml = (html: string = ""): string =>
    toHeadings(
        html
            .replace(/<p>(\s|&nbsp;)*<\/p>/gi, "")
            .replace(/<ul>\s*<\/ul>/gi, "")
            .replace(/(?:<br\s*\/?>\s*(?:&nbsp;)?\s*)+<\/li>/gi, "</li>")
    );

export default function Programs({ programs }: ProgramsProps) {
    const program = programs[0];

    if (!program) return null;

    return (
        <section
            className="mt-[-100px] py-12 md:py-20"
            style={{
                backgroundColor: PROGRAMS_BACKGROUND_COLOR,
                color: PROGRAMS_TEXT_COLOR,
            }}
        >
            <div className="mx-auto w-full max-w-[1320px] px-5 lg:px-0">
                <h2 className={`mb-10 md:mb-25 ${PROGRAMS_TITLE_TYPOGRAPHY}`}>
                    {program.title}
                </h2>

                <div
                    className="programs-content"
                    dangerouslySetInnerHTML={{
                        __html: cleanHtml(program.description),
                    }}
                />
            </div>
        </section>
    );
}