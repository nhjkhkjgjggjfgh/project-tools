// JSON utilities
export const formatJSON = (input: string, indent: number = 2): string => {
  try {
    const parsed = JSON.parse(input)
    return JSON.stringify(parsed, null, indent)
  } catch (error) {
    throw new Error('Invalid JSON')
  }
}

export const minifyJSON = (input: string): string => {
  try {
    const parsed = JSON.parse(input)
    return JSON.stringify(parsed)
  } catch (error) {
    throw new Error('Invalid JSON')
  }
}

// Base64 utilities
export const encodeBase64 = (text: string): string => {
  try {
    return btoa(unescape(encodeURIComponent(text)))
  } catch {
    throw new Error('Failed to encode')
  }
}

export const decodeBase64 = (text: string): string => {
  try {
    return decodeURIComponent(escape(atob(text)))
  } catch {
    throw new Error('Invalid Base64')
  }
}

// UUID utilities
export const generateUUID = (): string => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0
    const v = c === 'x' ? r : (r & 0x3) | 0x8
    return v.toString(16)
  })
}

export const generateMultipleUUIDs = (count: number): string[] => {
  return Array.from({ length: count }, () => generateUUID())
}

// Password utilities
export const generatePassword = (length: number = 16, options: {
  uppercase: boolean
  lowercase: boolean
  numbers: boolean
  symbols: boolean
} = {
  uppercase: true,
  lowercase: true,
  numbers: true,
  symbols: true,
}): string => {
  const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const lowercase = 'abcdefghijklmnopqrstuvwxyz'
  const numbers = '0123456789'
  const symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?'

  let chars = ''
  if (options.uppercase) chars += uppercase
  if (options.lowercase) chars += lowercase
  if (options.numbers) chars += numbers
  if (options.symbols) chars += symbols

  if (!chars) chars = lowercase

  let password = ''
  for (let i = 0; i < length; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length))
  }

  return password
}

// Gradient utilities
export const generateLinearGradient = (angle: number, color1: string, color2: string): string => {
  return `linear-gradient(${angle}deg, ${color1}, ${color2})`
}

export const generateRadialGradient = (color1: string, color2: string): string => {
  return `radial-gradient(circle, ${color1}, ${color2})`
}

export const getGradientCSS = (type: 'linear' | 'radial', angle: number, color1: string, color2: string): string => {
  if (type === 'linear') {
    return `background: ${generateLinearGradient(angle, color1, color2)};`
  }
  return `background: ${generateRadialGradient(color1, color2)};`
}

// URL utilities
export const encodeURL = (text: string): string => {
  return encodeURIComponent(text)
}

export const decodeURL = (text: string): string => {
  try {
    return decodeURIComponent(text)
  } catch {
    throw new Error('Invalid URL encoding')
  }
}

// Copy to clipboard utility
export const copyToClipboard = async (text: string): Promise<boolean> => {
  try {
    await navigator.clipboard.writeText(text)
    return true
  } catch {
    return false
  }
}

// String utilities
export const reverseString = (text: string): string => {
  return text.split('').reverse().join('')
}

export const countCharacters = (text: string): { total: number; noSpaces: number; words: number } => {
  return {
    total: text.length,
    noSpaces: text.replace(/\s/g, '').length,
    words: text.trim().split(/\s+/).filter(Boolean).length,
  }
}

// Markdown to HTML
export const markdownToHtml = (markdown: string): string => {
  let html = markdown
    // Headers
    .replace(/^### (.*?)$/gm, '<h3>$1</h3>')
    .replace(/^## (.*?)$/gm, '<h2>$1</h2>')
    .replace(/^# (.*?)$/gm, '<h1>$1</h1>')
    // Bold
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    // Italic
    .replace(/\*(.*?)\*/g, '<em>$1</em>')
    // Code
    .replace(/`(.*?)`/g, '<code>$1</code>')
    // Links
    .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2">$1</a>')
    // Line breaks
    .replace(/\n/g, '<br>')

  return html
}

// Color utilities
export const isValidColor = (color: string): boolean => {
  const hexRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/
  const rgbRegex = /^rgb\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*\)$/
  return hexRegex.test(color) || rgbRegex.test(color)
}

export const hexToRgb = (hex: string): { r: number; g: number; b: number } | null => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null
}

export const rgbToHex = (r: number, g: number, b: number): string => {
  return '#' + [r, g, b].map((x) => {
    const hex = x.toString(16)
    return hex.length === 1 ? '0' + hex : hex
  }).join('')
}
