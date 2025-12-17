import { Icon } from '@iconify/react';
import React from 'react'

const Topbar = () => {
  return (
    <header>
      <div className="h-24 flex justify-between items-center bg-white w-full border-b-[0.5px] border-b-[#C8CBD9] px-12">
        <div className="bg-[#F6F6FB] flex items-center rounded-md w-96 h-8 ">
          <input
            type="text"
            className="bg-transparent focus:outline-none w-full px-3 "
            placeholder="Search"
          />
          <button>
            <Icon
              icon="mingcute:search-line"
              className="text-[#627B87]/50"
              width="24"
              height="24"
            />
          </button>
        </div>
        <div className="flex items-center space-x-9">
          <div>
            <div className='flex justify-between items-center space-x-8'>
                <div className='flex space-x-3 items-center'>
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <Icon icon="iconamoon:profile-fill" width="48" height="48" />
              </div>
              <span>Owner</span>
                </div>
              <Icon
                icon="iconamoon:arrow-up-2-light"
                width="32"
                height="32"
                className="rotate-180"
              />
            </div>
          </div>
          <div className='relative'>
            <Icon
              icon="ion:notifcations"
              width="32"
              height="32"
              className="text-[#B0C3CC]"
            />
            <div className='absolute w-3 h-3 bg-red-500 rounded-full top-0 right-0.5 border border-white'/>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Topbar