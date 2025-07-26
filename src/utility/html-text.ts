export function getTextFromHtml(html) {
  const tempElement = document.createElement('div')
  tempElement.innerHTML = html
  return tempElement.textContent || ''
}


// export function getTextFromHtml(html: string): string {
//   const tempElement = document.createElement('div');
//   tempElement.innerHTML = html;
//   const rawText = tempElement.textContent || '';
//   return rawText.split(';').filter(Boolean).map(t => t.trim()).join('\n');
// }
