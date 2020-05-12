module.exports = {
    configureWebpack: {
      resolve: {
        alias: {
          // alias:别名的意思 简化别名
          // 在配置文件中已经设置了 --> "@": "src" 所以可以直接使用@
          assets: "@/assets",
          common: "@/common",
          components: "@/components",
          network: "@/network",
          views:"@/views",  
          page:"@/page" 
        }
      }
    }
  };