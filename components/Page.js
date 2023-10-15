import slider from '../public/img/slider1.jpg'
import photogrpaher from '../public/img/photographer.png'
import elephant from '../public/img/post-img3.jpg'
import Image from 'next/image'
export default function Page() {
    return (
      <div class="m-3 mx-16 ">
        <div class="flex">
          <div class="border bg-white">
            <div class="rounded m-5 flex">
              <div class="">
                <Image src={slider} alt='slider' width={700} height={400} class="rounded-l-lg" />
              </div>
              <div class="text-white next-to-slider p-3 rounded-r-lg">
                <p class="text-2xl">
                  Our
                </p>
                <p class="text-4xl text-green-700">
                  New Tours
                </p>
                <br></br>
                <p>
                  lorem ipsum dolor sit amet consectetur adipiscing elit
                  lorem ipsum dolor sit amet consectetur adipiscing elit
                </p>
              </div>
            </div>
  
            <div class="flex">
              <div class="rounded m-5 paragraph">
                <p class="text-3xl font-bold uppercase">
                  lorem ipsum <span class="text-green-700">dolor</span>  sit amet
                </p>
                <br></br>
                <p class="break-words">
                  lorem ipsum dolor sit amet consectetur adipiscing elit
                  lorem ipsum dolor sit amet consectetur adipiscing elit
                </p>
              </div>
  
              <div>
                <Image src={photogrpaher} alt="photgrapher" />
              </div>
            </div>
  
            <div class="size m-5">
              <nav>
                <ul class="flex">
                  <li class="flex-1">
                    <a class="text-center rounded-l-lg block border boder-green-600 bg-green-600 text-white py-2 px-4" href="#">By Destinations</a>
                  </li>
                  <li class="flex-1">
                    <a class="text-center block border border-grey text-gray-600 hover:bg-green-600 hover:text-white hover:boder-green-600 hover:border py-2 px-4" href="#">By Species</a>
                  </li>
                  <li class="text-center flex-1">
                    <a class="text-center rounded-r-lg block border border-grey hover:border-gray-200 text-gray-600 hover:bg-green-600 hover:text-white py-2 px-4" href="#">By Tour Type</a>
                  </li>
                </ul>
              </nav>
            </div>
  
            <div class="size m-5">
              <div class="content-center">
                <div class="img-area inline-block mt-4 mr-4">
                  <Image src={elephant} alt="elephant" width={350} class="border border-grey-600 border-opacity-25 border-4 rounded" />
                  <p class="font-bold">
                    lorem ipsum dolor
                  </p>
                  <p class="break-normal">
                    lorem ipsum dolor sit amet consectetur adipiscing elit lorem ipsum dolor sit
                  </p>
                </div>
  
                <div class="img-area inline-block mt-4 mr-4">
                  <Image src={elephant} alt="elephant" width={350} class="border border-grey-600 border-opacity-25 border-4 rounded" />
                  <p class="font-bold">
                    lorem ipsum dolor
                  </p>
                  <p class="break-normal">
                    lorem ipsum dolor sit amet consectetur adipiscing elit lorem ipsum dolor sit
                  </p>
                </div>
  
                <div class="img-area inline-block">
                  <Image src={elephant} alt="elephant" width={350} class="border border-grey-600 border-opacity-25 border-4 rounded" />
                  <p class="font-bold">
                    lorem ipsum dolor
                  </p>
                  <p class="break-normal">
                    lorem ipsum dolor sit amet consectetur adipiscing elit lorem ipsum dolor sit
                  </p>
                </div>
              </div>
  
              <div>
                <div class="img-area inline-block mt-4 mr-4">
                  <Image src={elephant} alt="elephant" width={350} class="border border-grey-600 border-opacity-25 border-4 rounded" />
                  <p class="font-bold">
                    lorem ipsum dolor
                  </p>
                  <p class="break-normal">
                    lorem ipsum dolor sit amet consectetur adipiscing elit lorem ipsum dolor sit
                  </p>
                </div>
  
                <div class="img-area inline-block mt-4 mr-4">
                  <Image src={elephant} alt="elephant" width={350} class="border border-grey-600 border-opacity-25 border-4 rounded" />
                  <p class="font-bold">
                    lorem ipsum dolor
                  </p>
                  <p class="break-normal">
                    lorem ipsum dolor sit amet consectetur adipiscing elit lorem ipsum dolor sit
                  </p>
                </div>
  
                <div class="img-area inline-block">
                  <Image src={elephant} alt="elephant" width={350} class="border border-grey-600 border-opacity-25 border-4 rounded" />
                  <p class="font-bold">
                    lorem ipsum dolor
                  </p>
                  <p class="break-normal">
                    lorem ipsum dolor sit amet consectetur adipiscing elit lorem ipsum dolor sit
                  </p>
                </div>
              </div>
            </div>
          </div>
  
          <div class="right-side">
            <div class="m-3 mx-4">
              <p class="uppercase font-bold text-xl text-gray-600">Holiday search</p>
              <p>
                Chọn nơi bạn muốn tham quan:
              </p>
  
              <div class="pt-4">
                <span class="block text-gray-700 bg-white border border rounded-md px-4 py-2">Chọn khu vực</span>
                <span class="block text-gray-700 bg-white border border rounded-md px-4 py-2 mt-6">Chọn chủ đề</span>
                <span class="block text-gray-700 bg-white border border rounded-md px-4 py-2 mt-6">Chọn ngày du lịch</span>
                <span class="block text-gray-700 bg-white border border rounded-md px-4 py-2 mt-6">Chọn mức giá</span>
              </div>
  
              <button class="bg-green-600 text-white font-bold py-2 px-4 rounded mt-6 customize-button">
                SEARCH HOLIDAYS
              </button>
  
              <br></br>
              <br></br>
              <p class="uppercase font-bold text-xl text-gray-600">Quick search</p>
              <p>
                Tìm thông tin nơi bạn tham quan:
              </p>
  
              <div>
                <div class="inline-block">
                  <input class="mr-4 w-40 border border-gray-400 rounded py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline mt-6" id="username" type="text" placeholder="Country/Code..." />
                </div>
                <div class="inline-block">
                  <button class="bg-green-600 text-white font-bold py-2 px-4 rounded mt-6">
                    SEARCH
                  </button>
                </div>
              </div>
  
              <br></br>
              <hr class=" border-gray-300"></hr>
              <br></br>
  
              <p class="uppercase font-bold text-xl text-gray-600">NEWSLETTER SIGNUP</p>
              <p>
                lorem ipsum dolor sit amet consectetur adipiscing elit
              </p>
  
              <input class="mr-4 w-full border border-gray-400 rounded py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline mt-6" id="username" type="text" placeholder="Enter Email..." />
  
              <div class="inline-block">
                <input class="mr-4 w-40 border border-gray-400 rounded py-2 px-3 text-gray-700 focus:outline-none focus:shadow-outline mt-6" id="username" type="text" placeholder="Enter Name..." />
              </div>
              <div class="inline-block">
                <button class="bg-green-600 text-white font-bold py-2 px-4 rounded mt-6">
                  SIGNUP
                </button>
              </div>
  
              <br></br>
              <br></br>
              <hr class=" border-gray-300"></hr>
              <br></br>
  
              <p class="uppercase text-xl text-gray-600">Latest news</p>
              <p class="text-green-600 font-bold">
                dolor sit amet consectetur
              </p>
              <p>
                lorem ipsum dolor sit amet consectetur adipiscing elit  lorem ipsum dolor sit amet consectetur adipiscing elit
              </p>
              <br></br>
              <p class="font-bold">
                dolor sit amet consectetur
              </p>
              <p>
                lorem ipsum dolor sit amet consectetur adipiscing elit  lorem ipsum dolor sit amet consectetur adipiscing elit
              </p>
            </div>
          </div>
  
          <div>
  
          </div>
        </div>
      </div>
    )
  }