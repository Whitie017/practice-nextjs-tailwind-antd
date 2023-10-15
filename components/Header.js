import logo from '../public/img/logo1.png'
import Image from 'next/image'
export default function Header() {
    return (
      <div class="m-5 mx-16">
        <div class="inline-block">
          <Image src={logo} alt='logo' />
        </div>
  
        <div class="inline-block float-right">
          <div class="block mb-3">
            <p class="text-gray-400 text-right">Contact Us by the telephone number below</p>
            <p class="text-2xl text-right">12 <span class="text-green-600">(0) 12</span>34 567890</p>
          </div>
  
          <div class="block">
            <nav class="">
              <ul class="flex">
                <li class="">
                  <a class="inline-block border-green-600 rounded py-1 px-3 bg-green-600 text-white font-bold" href="#">HOME</a>
                </li>
                <li class="">
                  <a class="inline-block border-white rounded hover:border-gray-200 text-green-600 hover:bg-green-600 hover:text-white py-1 px-3 font-bold" href="#">ABOUT</a>
                </li>
                <li class="">
                  <a class="inline-block border-white rounded hover:border-gray-200 text-green-600 hover:bg-green-600 hover:text-white py-1 px-3 font-bold" href="#">DONATE</a>
                </li>
                <li class="">
                  <a class="inline-block border-white rounded hover:border-gray-200 text-green-600 hover:bg-green-600 hover:text-white py-1 px-3 font-bold" href="#">VIDEO</a>
                </li>
                <li class="">
                  <a class="inline-block border-white rounded hover:border-gray-200 text-green-600 hover:bg-green-600 hover:text-white py-1 px-3 font-bold" href="#">CONTACT</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
  
  
        <div class="inline-block float-right">
  
        </div>
      </div>
  
  
    )
  }