<template>
<div class="profileCard">
    <div class="profileCard__imageWrap">
        <div class="profileCard__thumbWrap">
          <img class="profileCard__thumb" :src='this.avatar' />
        </div>
        <header class="profileCard__header">
            <h1 class="profileCard__title">{{profile.name}}</h1>
            <div class="profileCard__subTitle">{{ profileId }}</div>
        </header>
    </div>
    <div class="profileCard__contentWrap">
      <div class="profileCard__content">
        {{profile.description || 'Silence is golden'}}
      </div>
    </div>
    <ul class="profileCard__social">
        <li class="profileCard__socialItem" v-for="account in profile.account" :key="account.service">
          <a class="profileCard__socialLink" v-if='serviceMap[account.service]' :href="`${serviceMap[account.service]['profile']}${account.identifier}`" target="_blank">
            <i :class="['fa', `fa-${serviceMap[account.service] && serviceMap[account.service]['icon'] || account.service}`]"></i>
          </a>
        </li>
    </ul>
</div>
</template>

<script>
import avatar from '../assets/default_profile_400x400.png'

export default {
  props: ['profileId','profile'],
  data() {
    return {
      serviceMap: {
        'twitter': {
          profile: 'https://twitter.com/',
          icon: 'twitter'
        },
        'facebook': {
          profile: 'https://www.facebook.com/',
          icon: 'facebook'
        },
        'github': {
          profile: 'https://github.com/',
          icon: 'github'
        },                        
        'hackerNews': {
          profile: 'https://news.ycombinator.com/user?id=',
          icon: 'hacker-news'
        },
        'bitcoin': {
          profile: 'https://blockchain.info/address/',
          icon: 'bitcoin'
        }
      }
    }
  },
  computed: {
    avatar() {
      return this.profile && this.profile.image && this.profile.image.length > 0 ? 
        this.profile.image[0]['contentUrl'] : avatar
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import url(https://fonts.googleapis.com/css?family=Oswald:400,300,700|Merriweather);
@import url(https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css);
.profileCard {
  
  & {
    margin: 0 auto;
    padding-bottom: 60px;
    width: 350px;
    border: 1px solid #ccc;
    border-radius: 5px;
    overflow: hidden; 
    background-color:#fff;
    position: relative;
  }
  
  &__imageWrap {
    background: #c31432; /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #c31432, #240b36); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #c31432, #240b36); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    background-size: cover;
    height: 100px;
    width: 100%;
    position: relative;
    transition: height .3s ease-in;
    will-change: height;
    
    &:before {
      content: '';
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background-color: rgba(#333,.25);
      z-index: 1;
    }
  }
  
  &__location {
    color: #fff;
    z-index: 20;
    position: absolute;
    top: 5px;
    right: 5px;
  }  
  
  &__header {
    text-align: left;
    padding-left: 140px;
    position: absolute;
    bottom: -28px;
    left: 0;
    color: #fff;
    padding-left: 140px;
    z-index: 20;
    transition: transform .3s ease-in;
    will-change: transform;
  }  

  &__title {
    margin: 0;
    color: #fff;
    font-size: 1.125em;
    font-weight: 400;
    font-family: 'Oswald';
    font-weight: 400;
    z-index: 10;
    position: relative;   
    padding-bottom: 6px;
  }
  
  &__subTitle {
    color: #999;
    font-size: 0.875em;
    padding-top: 12px;
    transition: transform .3s ease-in;
    will-change: transform;
  }
  
  &__thumbWrap {
    width: 110px;
    height: 110px;
    background-color: #fff;
    border-radius: 5px;
    padding: 3px;
    position: absolute;
    bottom: -55px;
    left: 15px;
    border-radius: 110px;
    z-index: 10;
    transition: transform .3s linear;
    will-change: transform;
  }
  
  &__thumb {
    width: 104px;
    height: 104px;
    display: block;
    border-radius:84px;    
  }
  
  &__contentWrap {
    padding-bottom: 0px;
    min-height: 50px;
    position: relative;
    
    &::after {
      content: '';
      position: absolute;
      top: -10px;
      left: 50%;
      z-index: 20;
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 0 10px 10px 10px;
      border-color: transparent transparent #ffffff transparent;
      transform: translateY(10px);
      transition: transform .3s ease-in;
      margin-left: -10px;
    }
  }
  
  &__content {
    padding: 20px 20px 0;
    text-align: left;
    line-height: 1.3;
    font-size: 1em;
    font-family: sans-serif;
    font-size: 0.875em;
    color: #666;    
    max-height: 0;
    overflow: hidden;
    transform: translateY(-10%);
    transition: max-height .3s ease-in, opacity .3s ease-in;
    will-change: transform, opacity;
    opacity: 0;
    visibility: hidden;
    
    p {
      margin: 0;
    }
  }
  
  &__social {
    position: absolute;
    bottom: 0;
    left: 0;
    list-style: none;
    margin: 0;
    padding: 0;
    width: 100%;
    display: table;
    border-top: 1px solid #ccc;
    padding: 10px 0;
  }
  
  &__socialItem {
    display: table-cell;
    text-align: center;
  }
  
  &__socialLink {
    color: #999;
  }

    &:hover {
    
    .profileCard__imageWrap {
      height: 150px;
    }
    .profileCard__contentWrap {
      
      &:after {
        transform: translateY(0);
      }
    }
    .profileCard__content {
      max-height: 200px;
      opacity: 1;
      visibility: visible;
      transform: translateY(0);
      transition: max-height .3s ease-in, opacity .3s ease-in;
    }
    .profileCard__thumbWrap {
      transform: translateY(-70%);
    }
    .profileCard__header {
      transform: translateY(-110%);
    }
    .profileCard__subTitle {
      color: #fff;
      transform: translateY(-10px);
    }
  }
}

</style>
