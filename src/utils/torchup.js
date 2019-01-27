import styles from '../styles/app.scss'

export const parseToHtml = text => {
  let formattedText = [],
    isCurrentlyBold = false

  for (let i = 0; i < text.length; i++) {
    const char = text[i]

    // TorchUp Syntax:
    // *foo* == foo (in bold)
    // {foo} == foo (in heavy-bold/black)
    // [foo] == foo (with text in accent color)

    switch (char) {
      case '*':
        formattedText.push(isCurrentlyBold ? '</strong>' : '<strong>')
        isCurrentlyBold = !isCurrentlyBold
        break

      case '{':
        formattedText.push(`<strong class="${styles.strongBlack}">`)
        break

      case '}':
        formattedText.push('</strong>')
        break

      case '[':
        formattedText.push(`<span class='${styles.accentedText}'>`)
        break

      case ']':
        formattedText.push('</span>')
        break

      // Escape and insert 'special' char
      case '\\':
        i++
        formattedText.push(text[i])
        break

      default:
        formattedText.push(char)
        break
    }
  }

  return formattedText.join('')
}

export const renderTorchUp = text => {
  console.log({
    dangerouslySetInnerHTML: {
      __html: parseToHtml(text),
    },
  })
  return {
    dangerouslySetInnerHTML: {
      __html: parseToHtml(text),
    },
  }
}

export default parseToHtml
