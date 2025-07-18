import React from 'react'

export function PricingPlans() {
  return (
    <div class="bg-white">
      <div class="mx-auto max-w-7xl py-24 px-4 sm:px-6 lg:px-8">
        <div class="sm:align-center sm:flex sm:flex-col">
          <h1 class="text-5xl font-bold tracking-tight text-gray-900 sm:text-center">Pricing Plans</h1>
          <p class="mt-5 text-xl text-gray-500 sm:text-center">Start building for free, then add a site plan to go live. Account plans unlock additional features.</p>
          <div class="relative mt-6 flex self-center rounded-lg bg-gray-100 p-0.5 sm:mt-8">
            <button type="button" class="relative w-1/2 whitespace-nowrap rounded-md border-gray-200 bg-white py-2 text-sm font-medium text-gray-900 shadow-sm focus:z-10 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:w-auto sm:px-8">Monthly billing</button>
            <button type="button" class="relative ml-0.5 w-1/2 whitespace-nowrap rounded-md border border-transparent py-2 text-sm font-medium text-gray-700 focus:z-10 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:w-auto sm:px-8">Yearly billing</button>
          </div>
        </div>
        <div class="mt-12 space-y-4 sm:mt-16 sm:grid sm:grid-cols-2 sm:gap-6 sm:space-y-0 lg:mx-auto lg:max-w-4xl xl:mx-0 xl:max-w-none xl:grid-cols-4">
          <div class="divide-y divide-gray-200 rounded-lg border border-gray-200 shadow-sm">
            <div class="p-6">
              <h2 class="text-lg font-medium leading-6 text-gray-900">Hobby</h2>
              <p class="mt-4 text-sm text-gray-500">All the basics for starting a new business</p>
              <p class="mt-8">
                <span class="text-4xl font-bold tracking-tight text-gray-900">$12</span>
                <span class="text-base font-medium text-gray-500">/mo</span>
              </p>
              <a href="#" class="mt-8 block w-full rounded-md border border-gray-800 bg-gray-800 py-2 text-center text-sm font-semibold text-white hover:bg-gray-900">Buy Hobby</a>
            </div>
            <div class="px-6 pt-6 pb-8">
              <h3 class="text-sm font-medium text-gray-900">{`What's included`}</h3>
              <ul role="list" class="mt-6 space-y-4">
                <li class="flex space-x-3">

                  <svg class="h-5 w-5 flex-shrink-0 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                  </svg>
                  <span class="text-sm text-gray-500">Potenti felis, in cras at at ligula nunc.</span>
                </li>

                <li class="flex space-x-3">

                  <svg class="h-5 w-5 flex-shrink-0 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                  </svg>
                  <span class="text-sm text-gray-500">Orci neque eget pellentesque.</span>
                </li>
              </ul>
            </div>
          </div>

          <div class="divide-y divide-gray-200 rounded-lg border border-gray-200 shadow-sm">
            <div class="p-6">
              <h2 class="text-lg font-medium leading-6 text-gray-900">Freelancer</h2>
              <p class="mt-4 text-sm text-gray-500">All the basics for starting a new business</p>
              <p class="mt-8">
                <span class="text-4xl font-bold tracking-tight text-gray-900">$24</span>
                <span class="text-base font-medium text-gray-500">/mo</span>
              </p>
              <a href="#" class="mt-8 block w-full rounded-md border border-gray-800 bg-gray-800 py-2 text-center text-sm font-semibold text-white hover:bg-gray-900">Buy Freelancer</a>
            </div>
            <div class="px-6 pt-6 pb-8">
              <h3 class="text-sm font-medium text-gray-900">{`What's included`}</h3>
              <ul role="list" class="mt-6 space-y-4">
                <li class="flex space-x-3">

                  <svg class="h-5 w-5 flex-shrink-0 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                  </svg>
                  <span class="text-sm text-gray-500">Potenti felis, in cras at at ligula nunc. </span>
                </li>

                <li class="flex space-x-3">

                  <svg class="h-5 w-5 flex-shrink-0 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                  </svg>
                  <span class="text-sm text-gray-500">Orci neque eget pellentesque.</span>
                </li>

                <li class="flex space-x-3">

                  <svg class="h-5 w-5 flex-shrink-0 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                  </svg>
                  <span class="text-sm text-gray-500">Donec mauris sit in eu tincidunt etiam.</span>
                </li>
              </ul>
            </div>
          </div>

          <div class="divide-y divide-gray-200 rounded-lg border border-gray-200 shadow-sm">
            <div class="p-6">
              <h2 class="text-lg font-medium leading-6 text-gray-900">Startup</h2>
              <p class="mt-4 text-sm text-gray-500">All the basics for starting a new business</p>
              <p class="mt-8">
                <span class="text-4xl font-bold tracking-tight text-gray-900">$32</span>
                <span class="text-base font-medium text-gray-500">/mo</span>
              </p>
              <a href="#" class="mt-8 block w-full rounded-md border border-gray-800 bg-gray-800 py-2 text-center text-sm font-semibold text-white hover:bg-gray-900">Buy Startup</a>
            </div>
            <div class="px-6 pt-6 pb-8">
              <h3 class="text-sm font-medium text-gray-900">{`What's included`}</h3>
              <ul role="list" class="mt-6 space-y-4">
                <li class="flex space-x-3">

                  <svg class="h-5 w-5 flex-shrink-0 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                  </svg>
                  <span class="text-sm text-gray-500">Potenti felis, in cras at at ligula nunc. </span>
                </li>

                <li class="flex space-x-3">

                  <svg class="h-5 w-5 flex-shrink-0 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                  </svg>
                  <span class="text-sm text-gray-500">Orci neque eget pellentesque.</span>
                </li>

                <li class="flex space-x-3">

                  <svg class="h-5 w-5 flex-shrink-0 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                  </svg>
                  <span class="text-sm text-gray-500">Donec mauris sit in eu tincidunt etiam.</span>
                </li>

                <li class="flex space-x-3">

                  <svg class="h-5 w-5 flex-shrink-0 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                  </svg>
                  <span class="text-sm text-gray-500">Faucibus volutpat magna.</span>
                </li>
              </ul>
            </div>
          </div>

          <div class="divide-y divide-gray-200 rounded-lg border border-gray-200 shadow-sm">
            <div class="p-6">
              <h2 class="text-lg font-medium leading-6 text-gray-900">Enterprise</h2>
              <p class="mt-4 text-sm text-gray-500">All the basics for starting a new business</p>
              <p class="mt-8">
                <span class="text-4xl font-bold tracking-tight text-gray-900">$48</span>
                <span class="text-base font-medium text-gray-500">/mo</span>
              </p>
              <a href="#" class="mt-8 block w-full rounded-md border border-gray-800 bg-gray-800 py-2 text-center text-sm font-semibold text-white hover:bg-gray-900">Buy Enterprise</a>
            </div>
            <div class="px-6 pt-6 pb-8">
              <h3 class="text-sm font-medium text-gray-900">{`What's included`}</h3>
              <ul role="list" class="mt-6 space-y-4">
                <li class="flex space-x-3">

                  <svg class="h-5 w-5 flex-shrink-0 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                  </svg>
                  <span class="text-sm text-gray-500">Potenti felis, in cras at at ligula nunc. </span>
                </li>

                <li class="flex space-x-3">

                  <svg class="h-5 w-5 flex-shrink-0 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                  </svg>
                  <span class="text-sm text-gray-500">Orci neque eget pellentesque.</span>
                </li>

                <li class="flex space-x-3">

                  <svg class="h-5 w-5 flex-shrink-0 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                  </svg>
                  <span class="text-sm text-gray-500">Donec mauris sit in eu tincidunt etiam.</span>
                </li>

                <li class="flex space-x-3">

                  <svg class="h-5 w-5 flex-shrink-0 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                  </svg>
                  <span class="text-sm text-gray-500">Faucibus volutpat magna.</span>
                </li>

                <li class="flex space-x-3">

                  <svg class="h-5 w-5 flex-shrink-0 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                  </svg>
                  <span class="text-sm text-gray-500">Id sed tellus in varius quisque.</span>
                </li>

                <li class="flex space-x-3">

                  <svg class="h-5 w-5 flex-shrink-0 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                  </svg>
                  <span class="text-sm text-gray-500">Risus egestas faucibus.</span>
                </li>

                <li class="flex space-x-3">

                  <svg class="h-5 w-5 flex-shrink-0 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                  </svg>
                  <span class="text-sm text-gray-500">Risus cursus ullamcorper.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
