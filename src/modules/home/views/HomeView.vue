<script setup>
import axios from "../../../config/axios.js";

const goLink = async () => {
  location.href = '/board';
}
</script>

<template>
<!--  <h1>홈</h1>
  <RouterLink to="/board"><button>게시판으로</button></RouterLink>-->
  <div class="px-4 py-5 border-b rounded-t sm:px-6">
    <div class="overflow-hidden bg-white shadow dark:bg-gray-800 sm:rounded-md">
      <div class="px-4 py-5 sm:px-6">
        <h3 class="text-lg font-medium leading-6 text-gray-900">
          User database
        </h3>
        <p class="max-w-2xl mt-1 text-sm text-gray-500">
          Details and informations about user.
        </p>
      </div>
      <ul class="divide-y divide-gray-200 border-t border-gray-200">
        <li>
          <a class="block hover:bg-gray-50 dark:hover:bg-gray-900">
            <div class="px-4 py-4 sm:px-6">
              <div class="flex items-center justify-between">
                <p class="text-gray-700 text-md dark:text-white md:truncate">
                  Increase customer satisfaction rating by 10 points
                </p>
                <div class="flex flex-shrink-0 ml-2">
                  <p class="inline-flex px-2 text-xs font-semibold leading-5 text-green-800 bg-green-100 rounded-full">
                    Backlog
                  </p>
                </div>
              </div>
              <div class="mt-2 sm:flex sm:justify-between">
                <div class="sm:flex">
                  <p class="flex items-center font-light text-gray-500 text-md dark:text-gray-300">
                    December 10, 2020
                  </p>
                </div>
              </div>
            </div>
          </a>
        </li>
      </ul>
      <div class="w-full p-4 mx-auto md:w-1/2">
        <button type="button" class="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
          View all
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>