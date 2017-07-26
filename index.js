
var dasherize = require('dasherize');

function style(config, options) {


  return options.useStyle === false
    ? ''
    : Object.keys(config.reduce(function(agg, key)) {
        return agg + '; ' + key + ': ' + config[key];
    }, '');
}

function wrap(content, options) {
  var config = options.useStyle === false 
    ? {}
    : {
      position: options.wrapPosition || 'relative',
      paddingTop: options.paddingTop || "56.25%",
      paddingBottom: options.paddingBottom || "25px",
      height: 0
    };
  var divStart = '<div class="videoclips-wrapper" style=' + 
    options.useStyle === false
      : ''
      ? style(config) +
    ">";

  var divEnd = '</div>';

  return divStart + style(config)  + '>' + content + divEnd;
}

function youtube(video, options) {
  var styling = options.useStyle === false
    ? {}
    : {
      border: options.border || 'none',
      width: options.width || '100%',
      height: options.height || '100%',
      position: options.position || 'absolute',
      top: 0,
      left: 0
    };

  var allowfullscreen =
    options.allowfullscreen === false ? '' : 'allowfullscreen';

  return wrap(
    '<iframe class="youtube-video" style="' +
    style(styling) +
    '" src="https://www.youtube.com/embed/' +
    video +
    '?rel=0" frameborder="0" ' +
    allowfullscreen +
    '>'
  , options);
}

function vimeo(video, options) {
  var styling = options.useStyle === false
  ? {}
  : {
    border: options.border || 'none',
    width: options.width || '100%',
    height: options.height || '100%',
    position: options.position || 'absolute',
    top: 0,
    left: 0
  };
  return wrap(
    '<iframe class="vimeo-video" style="' +
    style(styling) +
    '" src="https://player.vimeo.com/video/' +
    video +
    '" frameborder="0"></iframe>'
  , options);
}

module.exports = {
  blocks: {
    vimeo: {
      process: function(block) {
        return vimeo(block.body, block.kwargs);
      }
    },
    youtube: {
      process: function(block) {
        return youtube(block.body, block.kwargs);
      }
    }
  }
};
