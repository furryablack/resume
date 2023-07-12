<template>
  <div class="contact-to-me">
    <div class="text-left flex-col mb-1 pt-2">
      <span class="block text-sm italic">Within Armenia use 094 789 476</span>      
      <span class="block text-sm italic">From abroad use +374 94 789 476</span>
    </div>
    
    <div class="columns-1">
      <ul>
        <li class="flex flex-row justify-start">
          <span class="contact-to-me__contact-identity">skype</span>

          <span>
            <UI.NativeLink href="skype:big2bear4?chat">big2bear4</UI.NativeLink>
          </span>
        </li>
      
        <li class="flex flex-row justify-start">
          <span class="contact-to-me__contact-identity">telegram</span>
          
          <span>
            <UI.NativeLink href="https://t.me/furryablack">t.me/furryablack</UI.NativeLink>
          </span>
        </li>      
        
        <li class="flex flex-row justify-start">
          <span class="contact-to-me__contact-identity">email</span>

          <span>
            <UI.NativeLink href="mailto:aleksei.kosianov.software.dev@gmail.com">aleksei.kosianov.software.dev@gmail.com</UI.NativeLink>
          </span>
        </li>
        
        <li class="flex flex-row justify-start">
          <span class="contact-to-me__contact-identity">whatsapp</span>

          <span>
            <UI.NativeLink href="https://wa.me/37494789476">37494789476</UI.NativeLink>
          </span>
        </li>

        <li class="flex flex-row justify-start">
          <span class="contact-to-me__contact-identity">github</span>

          <span>
            <UI.NativeLink href="https://github.com/furryablack">github.com/furryablack</UI.NativeLink>
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { Shared } from '@shared';

const { UI } = Shared;
</script>

<style lang="less">
@pseudo: {
  transform: translateY(calc(50% + 1px));
  display: block;
  background: rgba(0, 0, 0, .4);
  height: 1px;
  width: 100%;
  content: " ";
}

.contact-to-me {
  @apply flex flex-col;

  &__contact-identity {
    @apply font-semibold flex w-24 text-right;

    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;    
  }

  &__contact-identity {
    &:after {
      @pseudo();
      
      margin: 0 6px;
    }
  }
}
</style>
