/*
Description

Task
You wrote an article. The main body of the article is divided into several chapters.

article=[
"Chapter 1: Who are you?\nYou are a warrior, fighting in codewars....some text omitted in page 1.....",
"..............................some text omitted in page 2........................................",
"...........................\nChapter 2: Who is myjinxin2015?\nmyjinxin2015 is a great warrior, fighting in codewars....some text omitted in page 3.....",
"...........................\nChapter 3: Who is ZozoFouchtra?\nZozoFouchtra is a great warrior, fighting with myjinxin2015 in codewars....some text omitted in page 4.....",
"..............................some text omitted in page 5........................................",
"Chapter 4: Who is Smile67?\nSmile67 is a great warrior, he and myjinxin2015 fighting with ZozoFouchtra in codewars....some text omitted in page 6.....\nChapter 5: Who is the next warrior?\nI don't know....some text omitted in page 6.....",
"..............................some text omitted in page 7........................................"
]

As you can see, each element in article is a page of article, number start from 1. We need to find out the number of 
each chapter, create a page index:
Chapter 1: Who are you?                            Page 1..3
Chapter 2: Who is myjinxin2015?                    Page 3..4
Chapter 3: Who is ZozoFouchtra?                    Page 4..5
Chapter 4: Who is Smile67?                         Page 6
Chapter 5: Who is the next warrior?                Page 6..7
|--->               50 characters             <---|

Can you complete the function createPageIndex?
*/

function createPageIndex(article) {
  const chapters = article.reduce((acc, cur, i) => {
    cur.split("\n").forEach((line, j) => {
      if (line.startsWith("Chapter")) {
        acc.push([line, i + 1, j == 0]);
      }
    });
    return acc;
  }, []);

  return chapters
    .map(([chapter, start], idx, arr) => {
      let end = article.length;
      if (arr[idx + 1]) {
        end = arr[idx + 1][1] + (arr[idx + 1][2] ? -1 : 0);
      }
      const page = start === end ? start : `${start}..${end}`;
      return `${chapter.padEnd(50, " ")}Page ${page}`;
    })
    .join("\n");
}
