
<template>
  <svg xmlns="http://www.w3.org/2000/svg" :width="width" viewBox="0 0 480.07042 572.25352" :class="classes">
    <defs><linearGradient id="ab3b267d-51c1-4240-8b6e-31be5f4630fe" x1="404.64085" y1="550.42254" x2="404.64085" y2="454.42254" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="gray" stop-opacity="0.25"></stop><stop offset="0.53514" stop-color="gray" stop-opacity="0.12"></stop><stop offset="1" stop-color="gray" stop-opacity="0.1"></stop></linearGradient></defs><title>Job hunt</title><rect width="480.07042" height="572.25352" fill="#3f3d56"></rect><rect x="71.83099" y="155.07042" width="337.60563" height="14.3662" fill="#e0e0e0"></rect><rect x="71.83099" y="249.64789" width="337.60563" height="14.3662" fill="#e0e0e0"></rect><rect x="71.83099" y="274.78873" width="337.60563" height="14.3662" fill="#e0e0e0"></rect><rect x="302.88732" y="224.50704" width="106.5493" height="14.3662" fill="#3ad29f" opacity="0.6"></rect><rect x="190.35211" y="333.4507" width="106.5493" height="14.3662" :style="style"></rect><g opacity="0.5"><circle cx="404.64085" cy="502.42254" r="48" fill="url(#ab3b267d-51c1-4240-8b6e-31be5f4630fe)"></circle></g><circle cx="404.64085" cy="502.42254" r="45.17647" fill="#69f0ae"></circle><polygon points="385.7 495.599 402.641 511.128 426.641 475.834 435.111 482.893 402.641 525.246 378.641 498.423 385.7 495.599" fill="#fff"></polygon>
  </svg>
</template>

<script>
import { undrawMixin } from './undraw.mixin'

export default {
  mixins: [undrawMixin('UndrawJobHunt')]
}
</script>
