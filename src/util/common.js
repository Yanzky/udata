export default {
  /**
   * 数组交换位置
   * @param arr
   * @param index1
   * @param index2
   * @returns {*}
   */
  swapItem(arr, index1, index2) {
    arr[index1] = arr.splice(index2, 1, arr[index1])[0];
    return arr;
  },

  /**
   * 数组上移
   * @param arr
   * @param index
   */
  upItem(arr, index) {
    if (index === 0) {
      return;
    }
    this.swapItem(arr, index, index - 1);
  },

  /**
   * 数组下移
   * @param arr
   * @param index
   */
  downItem(arr, index) {
    if (index === arr.length - 1) {
      return;
    }
    this.swapItem(arr, index, index + 1);
  },

  /**
   * 数组置顶
   * @param arr
   * @param index
   */
  topItem(arr, index) {
    if (index === 0) {
      return;
    }
    this.swapItem(arr, index, 0);
  },

  /**
   * 数组置底
   * @param arr
   * @param index
   */
  bottomItem(arr, index){
    if (index === arr.length - 1) {
      return;
    }
    this.swapItem(arr, index, arr.length - 1);
  },

  formatJson(json, options){
    let reg = null,
      formatted = '',
      pad = 0,
      PADDING = ' ';
    options = options || {};
    options.newlineAfterColonIfBeforeBraceOrBracket = (options.newlineAfterColonIfBeforeBraceOrBracket === true) ? true : false;
    options.spaceAfterColon = (options.spaceAfterColon === false) ? false : true;
    if (typeof json !== 'string') {
      json = JSON.stringify(json);
    } else {
      json = JSON.parse(json);
      json = JSON.stringify(json);
    }
    reg = /([\{\}])/g;
    json = json.replace(reg, '\r\n$1\r\n');
    reg = /([\[\]])/g;
    json = json.replace(reg, '\r\n$1\r\n');
    reg = /(\,)/g;
    json = json.replace(reg, '$1\r\n');
    reg = /(\r\n\r\n)/g;
    json = json.replace(reg, '\r\n');
    reg = /\r\n\,/g;
    json = json.replace(reg, ',');
    if (!options.newlineAfterColonIfBeforeBraceOrBracket) {
      reg = /\:\r\n\{/g;
      json = json.replace(reg, ':{');
      reg = /\:\r\n\[/g;
      json = json.replace(reg, ':[');
    }
    if (options.spaceAfterColon) {
      reg = /\:/g;
      json = json.replace(reg, ':');
    }
    (json.split('\r\n')).forEach(function (node, index) {
        let i = 0,
          indent = 0,
          padding = '';

        if (node.match(/\{$/) || node.match(/\[$/)) {
          indent = 1;
        } else if (node.match(/\}/) || node.match(/\]/)) {
          if (pad !== 0) {
            pad -= 1;
          }
        } else {
          indent = 0;
        }

        for (i = 0; i < pad; i++) {
          padding += PADDING;
        }

        formatted += padding + node + '\r\n';
        pad += indent;
      }
    );
    return formatted;
  },
}
