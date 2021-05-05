<template>
  <InnerPageHero
    image-url="/images/ipl/srh-might-target-one-overseas.jpg"
    title="Contact Us"
  />

  <div class="container mx-auto py-8 sm:py-12 px-4 sm:px-0">
    <div class="grid sm:grid-cols-3 sm:gap-4">
      <div class="">
        <span class="text-gray-500">Address: </span> Lorem, ipsum.
      </div>
      <div class=""><span class="text-gray-500">Phoen: </span> +0999445745</div>
      <div class="">
        <span class="text-gray-500">Email: </span> info@example.com
      </div>
    </div>
    <div class="mt-8 sm:mt-16 grid sm:grid-cols-2 gap-8 sm:gap-12">
      <div class="">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29206.496084015573!2d90.39292478187441!3d23.789707712465113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7a0f70deb73%3A0x30c36498f90fe23!2sGulshan%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1613569559291!5m2!1sen!2sbd"
          class="w-full"
          height="300"
          frameborder="0"
          style="border: 0"
          allowfullscreen=""
          aria-hidden="false"
          tabindex="0"
        ></iframe>
      </div>
      <form class="p-8 bg-gray-300 shadow rounded space-y-4">
        <div class="">
          <input
            type="text"
            placeholder="Enter Name"
            name=""
            id=""
            class="px-4 py-2 w-full border bg-gray-200 focus:border-primary focus:outline-none rounded"
            required
          />
          <!-- <span class="text-red-600 text-sm"> The error message </span> -->
        </div>
        <div class="">
          <input
            type="email"
            placeholder="Enter Email"
            name=""
            id=""
            class="px-4 py-2 w-full border bg-gray-200 focus:border-primary focus:outline-none rounded"
            required
          />
          <!-- <span class="text-red-600 text-sm"> The error message </span> -->
        </div>
        <div class="">
          <input
            type="phone"
            placeholder="Enter Phone"
            name=""
            id=""
            class="px-4 py-2 w-full border bg-gray-200 focus:border-primary focus:outline-none rounded"
            required
          />
          <!-- <span class="text-red-600 text-sm"> The error message </span> -->
        </div>
        <div class="">
          <textarea
            placeholder="Enter Message"
            class="px-4 py-2 w-full border bg-gray-200 focus:border-primary focus:outline-none rounded"
            rows="5"
            required
          ></textarea>
          <!-- <span class="text-red-600 text-sm"> The error message </span> -->
        </div>

        <!-- <div class="px-4 py-2 bg-red-600 text-white rounded">
            Lorem ipsum dolor sit amet consectetur.
        </div> -->

        <!-- <div class="px-4 py-2 bg-green-600 text-white rounded">
            Lorem ipsum dolor sit amet consectetur.
        </div> -->

        <button
          class="px-4 py-2 hover:bg-primary sm:px-6 bg-gray-400 text-white rounded focus:outline-none"
        >
          submit
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import InnerPageHero from "@/components/InnerPageHero";
export default {
  components: {
    InnerPageHero,
  },
  props: {},
  setup() {},
};
</script>

<style>
</style>