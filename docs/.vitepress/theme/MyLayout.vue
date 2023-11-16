<script setup>
import { useRoute } from "vitepress";
import { useData } from "vitepress";
import { computed } from "vue";
import DefaultTheme from "vitepress/theme";

const { Layout } = DefaultTheme;
const { theme } = useData();
const route = useRoute();
const pageName = computed(() =>
  route.path.replace(/[./]+/g, "_").replace(/_html$/, "")
);
</script>

<template>
  <Layout>
    <template #home-features-after>
      <div class="VPFeatures">
        <Content
          class="vp-doc in"
          :class="[
            pageName,
            theme.externalLinkIcon && 'external-link-icon-enabled',
          ]"
        />
      </div>
    </template>
  </Layout>
</template>
<style scoped>
.in {
  max-width: 1152px;
  margin: 0 auto;
}

.VPFeatures {
  position: relative;
  padding: 64px 24px 0;
}

@media (min-width: 640px) {
  .VPFeatures {
    padding: 0 48px 0;
  }
}

@media (min-width: 960px) {
  .VPFeatures {
    padding: 64px 64px 0;
  }
}
</style>
