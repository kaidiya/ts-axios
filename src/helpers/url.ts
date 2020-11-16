import { isDate, isPlainObject } from './utils';

function encode(val:string):string {
  return encodeURIComponent(val)
  .replace(/%40/g, '@')
  .replace(/%3A/ig, ':')
  .replace(/%24/g, '$')
  .replace(/%2C/ig, ',')
  .replace(/%20/g, '+')
  .replace(/%5B/ig, '[')
  .replace(/%5D/ig, ']')
}

export function buildURL(url:string, params?:any):string {
  if (!params) {
    return url;
  }

  const parts: string[] = [];

  Object.keys(params).forEach((key) => {
    const val = params[key];

    if (val === null || typeof val === 'undefined') {
      return;
    }

    let values = [];

    if (Array.isArray(val)) {
      values = val;
      key += '[]';
    } else {
      values = [val];
    }

    values.forEach((v) => {
      if (isDate(v)) {
        v = v.toISOString();
      } else if (isPlainObject(v)) {
        v = JSON.stringify(v);
      }

      parts.push(`${encode(key)}=${encode(v)}`)
    })
  })

  let serializedParams = parts.join('&');

  if (serializedParams) {
    const markIndex = url.indexOf('#');
    if (markIndex !== -1) {
      url = url.slice(0, markIndex);
    }
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
}