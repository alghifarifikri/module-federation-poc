<template>
  <div>
    <LazyNavigation />
    <div>
      <h3>Host</h3> 
      <Counter></Counter>
    </div>
    <div>
      <h3>Remote Component:</h3> 
      <LazyRemote/>
    </div>

    <nuxt-img
        format="webp"
        quality="100"
        width="500"
        height="500"
        sizes="sm:100vw md:100vw lg:100vw"
        alt="loyalty detail"
        loading="lazy"
        provider="customProvider"
        src="/img/icon-afi.webp"
    />
  </div>
</template>

