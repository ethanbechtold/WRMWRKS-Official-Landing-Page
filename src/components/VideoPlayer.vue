<script>
  import videojs from 'video.js';
  
  export default {
    name: 'VideoPlayer',
    props: {
        options: {
            type: Object,
            default() {
                return {};
            }
      }
    },
    data() {
        return {
        currentVideo: 0,
    }
    },
    mounted() {
          this.player = videojs(this.$refs.videoPlayer, this.options, () => {
            this.player.log('onPlayerReady', this);
      });
    },
    beforeDestroy() {
        if (this.player) {
        this.player.dispose();
    }
    }
  }
</script>

<template>
  
    <!-- video js player skin -->
    <div>
      <video ref="videoPlayer" class="video-js"></video>
    </div>
  </template>