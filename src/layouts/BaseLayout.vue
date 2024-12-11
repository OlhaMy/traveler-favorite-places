<template>
  <main class="flex h-screen">
    <section class="flex-1 flex justify-center items-center bg-primary px-5">
      <div class="text-white text-center max-w-[500px] w-full">
        <slot></slot>
      </div>
    </section>

    <section class="flex-1">
      <img class="w-full object-cover" src="../assets/img/static-map-with-pin.png" alt="map" />
    </section>
  </main>
</template>
