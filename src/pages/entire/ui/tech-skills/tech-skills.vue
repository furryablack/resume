<template>
  <div class="tech-skills">
    <div>
      <h3 class="text-xl text-left font-semibold mb-1">[Skills]</h3>
    </div>

    <div class="columns-1">
      <ul>
        <li class="flex flex-row justify-start">
          <span class="tech-skills__section">Languages</span>
          <span class="whitespace-nowrap">JavaScript, TypeScript, HTML/CSS/LESS/SASS, etc</span>
        </li>
      
        <li class="flex flex-row justify-start">
          <span class="tech-skills__section">Frameworks</span>
          <span class="whitespace-nowrap">Vue 2, Vue 3, Angular, Hasura, etc</span>
        </li>      
        
        <li class="flex flex-row justify-start">
          <span class="tech-skills__section">Developer Tools</span>
          <span class="whitespace-nowrap">Git, Git Flow, Docker, VS Code, etc</span>
        </li>
        
        <li class="flex flex-row justify-start">
          <span class="tech-skills__section">Webtooling Utils</span>
          <span class="whitespace-nowrap">Webpack, Vite, Rollup, ESLint, Prettier, etc</span>
        </li>

        <li class="flex flex-row justify-start">
          <span class="tech-skills__section">JS Libraries</span>
          <span class="whitespace-nowrap">React, Ramda, Effector.js, Pinia, Vuex, Vue Router, React Router, Vitest, Jest, etc</span>
        </li>

        <li class="flex flex-row justify-start">
          <span class="tech-skills__section">CSS Libraries</span>
          <span class="whitespace-nowrap">Bulma.css, Bootstrap.css, Tailwind.css, etc</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="less">
@pseudo: {
  transform: translateY(calc(50% + 1px));
  display: block;
  background: rgba(0, 0, 0, .4);
  height: 1px;
  width: 100%;
  content: " ";
}

.tech-skills {
  @apply flex flex-col;

  &__section {
    @apply font-semibold w-36 flex text-right whitespace-nowrap;

    display: flex;
    justify-content: center;
    align-items: center;
    position: relative; 
  }

  &__section {
    &:after {
      @pseudo();
      
      margin: 0 6px;
    }
  }
}
</style>