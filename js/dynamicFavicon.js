function changeIconSet(operator){
  changeFavicon(operator);
  changeIconList(operator);
}

function getIconList(baseUrl){
  return [
    {
      id:'apple-touch-icon-57x57',
      rel:'apple-touch-icon',
      sizes:'57x57',
      href:baseUrl+'apple-icon-57x57.png'
    },
    {
      id:'apple-touch-icon-60x60',
      rel:'apple-touch-icon',
      sizes:'60x60',
      href:baseUrl+'apple-icon-60x60.png'
    },
    {
      id:'apple-touch-icon-72x72',
      rel:'apple-touch-icon',
      sizes:'72x72',
      href:baseUrl+'apple-icon-72x72.png'
    },
    {
      id:'apple-touch-icon-76x76',
      rel:'apple-touch-icon',
      sizes:'76x76',
      href:baseUrl+'apple-icon-76x76.png'
    },
    {
      id:'apple-touch-icon-114x114',
      rel:'apple-touch-icon',
      sizes:'114x114',
      href:baseUrl+'apple-icon-114x114.png'
    },
    {
      id:'apple-touch-icon-120x120',
      rel:'apple-touch-icon',
      sizes:'120x120',
      href:baseUrl+'apple-icon-120x120.png'
    },
    {
      id:'apple-touch-icon-144x144',
      rel:'apple-touch-icon',
      sizes:'144x144',
      href:baseUrl+'apple-icon-144x144.png'
    },
    {
      id:'apple-touch-icon-152x152',
      rel:'apple-touch-icon',
      sizes:'152x152',
      href:baseUrl+'apple-icon-152x152.png'
    },
    {
      id:'apple-touch-icon-180x180',
      rel:'apple-touch-icon',
      sizes:'180x180',
      href:baseUrl+'apple-icon-180x180.png'
    },
    {
      id:'android-icon-192x192',
      rel:'icon',
      sizes:'192x192',
      href:baseUrl+'android-icon-192x192.png',
      type:'image/png'
    },
    {
      id:'favicon-32x32',
      rel:'icon',
      sizes:'32x32',
      href:baseUrl+'favicon-32x32.png',
      type:'image/png'
    },
    {
      id:'favicon-96x96',
      rel:'icon',
      sizes:'96x96',
      href:baseUrl+'favicon-96x96.png',
      type:'image/png'
    },
    {
      id:'favicon-16x16',
      rel:'icon',
      sizes:'16x16',
      href:baseUrl+'favicon-16x16.png',
      type:'image/png'
    },
  ]
}

function changeFavicon(operator){

  var faviconUrlList = {
    generalFaviconUrl : 'https://serviceseller.fecharge.com/image/generalFavicon/favicon.ico',
    mciFaviconUrl : 'https://serviceseller.fecharge.com/image/mciFavicon/favicon.ico',
    mtnFaviconUrl : 'https://serviceseller.fecharge.com/image/mtnFavicon/favicon.ico',
    rightelFaviconUrl : 'https://serviceseller.fecharge.com/image/rightelFavicon/favicon.ico',
  }

  if(operator=='MCI'){
    setFavicon(faviconUrlList.mciFaviconUrl)
  }else if(operator=='MTN'){
    setFavicon(faviconUrlList.mtnFaviconUrl)
  }else if(operator=='RighTel'){
    setFavicon(faviconUrlList.rightelFaviconUrl)
  }else{
    setFavicon(faviconUrlList.generalFaviconUrl);
  }
}

function setFavicon(faviconUrl){
  var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
  link.type = 'image/x-icon';
  link.rel = 'shortcut icon';
  link.href = faviconUrl;
  document.getElementsByTagName('head')[0].appendChild(link);
}

function changeIconList(operator){

  var iconBaseUrlList = {
    general : 'https://serviceseller.fecharge.com/image/generalFavicon/',
    mci : 'https://serviceseller.fecharge.com/image/mciFavicon/',
    mtn : 'https://serviceseller.fecharge.com/image/mtnFavicon/',
    rightel : 'https://serviceseller.fecharge.com/image/rightelFavicon/',
  }


  if(operator=='MCI'){
    setIconList(iconBaseUrlList.mci)
  }else if(operator=='MTN'){
    setIconList(iconBaseUrlList.mtn)
  }else if(operator=='RighTel'){
    setIconList(iconBaseUrlList.rightel)
  }else{
    setIconList(iconBaseUrlList.general);
  }
}

function setIconList(baseUrl){
  var iconList = getIconList(baseUrl);
  iconList.forEach(function(icon){
    var iconDomId = '#'+icon.id;
    var existLink = document.querySelector(iconDomId);
    if(existLink){
      existLink.setAttribute('rel', icon.rel);
      existLink.setAttribute('href', icon.href);
      existLink.setAttribute('sizes', icon.sizes);
      if(icon.type){
        existLink.setAttribute('type', icon.type);
      }
    }else{
      var link = document.createElement('link');
      link.id = icon.id;
      link.rel = icon.rel;
      link.href = icon.href;
      link.sizes = icon.sizes;
      if(icon.type){
        link.type = icon.type;
      }
      document.getElementsByTagName('head')[0].appendChild(link);
    }

  })
}
