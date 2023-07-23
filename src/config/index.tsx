const config = {
   
   apiUrlMessage : import.meta.env.VITE_API_URL ?  import.meta.env.VITE_API_URL   : "https://bishalportfolio.onrender.com/api/v1/user/message",
   apiUrlDownload : import.meta.env.VITE_API_URL_DOWNLOAD  ? import.meta.env.VITE_API_URL_DOWNLOAD  : 'https://bishalportfolio.onrender.com/api/v1/user/download',
}

export { config as configuration}