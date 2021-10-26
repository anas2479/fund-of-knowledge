<div class=" max-w-[1200px] mx-auto  h-screen md:flex flex-wrap items-center p-4">
    <div class="flex-1 section-title" bind:this="{sectionInfo}">
        <h2 class="text-xl text-gray-800 font-medium capitalize">
            {title}
        </h2>
        <p class="text-gray-600 text-lg">
            {description}
        </p>
    </div>
    <div bind:this="{image}" class="flex-1">
        <slot></slot>
    </div>
</div>

<script>

    import gsap from 'gsap'
    import  ScrollTrigger  from "gsap/src/ScrollTrigger";
    import { onMount } from 'svelte';
    //import { ScrollTrigger } from "gsap";

    gsap.registerPlugin(ScrollTrigger)

    let sectionInfo , image

    onMount(()=>{
        gsap.from(sectionInfo,{
        scrollTrigger:{
            trigger:sectionInfo,
            toggleActions:'restart pause restart none'
        },
        opacity:0,
        x:20,
        duration:1
        })

    gsap.from(image,{
        scrollTrigger:{
            trigger:image,
            toggleActions:'restart pause restart none'
        },
        opacity:0,
        x:20,
        duration:1
        })
    })

    export let title
    export let description
</script>