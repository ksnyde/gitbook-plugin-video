
var dasherize = require('dasherize');

function style(config, o) {
  return o.useStyle === false
    ? ''
    : Object.keys(config).reduce(function(agg, key) {
        return agg + '; ' + key + ': ' + config[key];
    }, '');
}

function wrap(content, o) {
  var config = o.useStyle === false 
    ? {}
    : {
      position: o.wrapPosition || 'relative',
      paddingTop: o.paddingTop || "56.25%",
      paddingBottom: o.paddingBottom || "25px",
      height: 0
    };
  var divStart = '<div class="videoclips-wrapper" style=' + style(config) + ">";
  var divEnd = '</div>';

  return divStart + content + divEnd;
}

function youtube(video, o) {
  o = o || {};  
  var styling = o.useStyle === false
    ? {}
    : {
      border: o.border || 'none',
      width: o.width || '100%',
      height: o.height || '100%',
      position: o.position || 'absolute',
      top: 0,
      left: 0
    };

  var allowfullscreen =
    o.allowfullscreen === false ? '' : 'allowfullscreen';

  return wrap(
    '<iframe class="youtube-video" style="' +
    style(styling) +
    '" src="https://www.youtube.com/embed/' +
    video +
    '?rel=0" frameborder="0" ' +
    allowfullscreen +
    '>'
  , o);
}

function vimeo(video, o) {
  o = o || {};
  var styling = o.useStyle === false
  ? {}
  : {
    border: o.border || 'none',
    width: o.width || '100%',
    height: o.height || '100%',
    position: o.position || 'absolute',
    top: 0,
    left: 0
  };
  return wrap(
    '<iframe class="vimeo-video" style="' +
    style(styling) +
    '" src="https://player.vimeo.com/video/' +
    video +
    '" frameborder="0"></iframe>'
  , o);
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
