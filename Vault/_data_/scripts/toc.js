let startingLevel = parseInt(input.startingLevel);
let addHeader = input.addHeader;

const content = await dv.io.load(dv.current().file.path)
const toc = content.match(new RegExp(`^#{${startingLevel},} \\S.*`, 'mg'))
  .map(heading => {
    const [_, level, text] = heading.match(/^(#+) (.+)$/)
    const link = dv.current().file.path + '#' + text
    return '\t'.repeat(level.length - startingLevel) + `1. [[${link}|${text}]]`
  })

if(addHeader == true){
  dv.header(2, 'Table of contents')
}
dv.paragraph(toc.join('\n'))