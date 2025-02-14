import React from 'react'
import ProfileAvatar from './profileAvatar';

interface DrawerProps {
   isDrawerOpen:boolean;
   onClose: () => void;
}

export const Drawer: React.FC<DrawerProps> = ({isDrawerOpen, onClose}) => {
    return (
        <>
           {/* Overlay (closes drawer when clicking outside) */}
     {isDrawerOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={onClose}
        />
      )}

      {/* Side Navigation Drawer with Slide-in Animation */}
      <div
        className={`fixed left-0 top-0 h-full w-[80%] bg-white shadow-lg z-50 p-6 transform transition-transform duration-300 ${isDrawerOpen ? "translate-x-0" : "-translate-x-full"} 
        rounded-tr-3xl rounded-br-3xl`}
      >     
        {/* Profile Section */}
        <div className="flex items-center space-x-4 mb-6  pt-10 pl-4 pr-4 ">
          <ProfileAvatar src={ 'https://s3-alpha-sig.figma.com/img/44e1/0dbd/f47f8b2405057fd92348a0f698c5fee3?Expires=1740355200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=BJfAZbCUKhadnLuyuvPTw5R6-djDPOCCzJVhLvm~inhKB~UXpFVaew10I10chHdwj-MMEakq398yc5DNUoev9QXHcnBGJTrY76s9ZA~LZrOC5jxBLDglpUCZIbfpNc-o~Uy6U8jCYtax26LUtHzp64VtsFLE1ydlBiSPoU6YhAXTRFHaBl0za~TRfbx4FD4tbP1WSAAYHR2csS2Qd6Ie-km68fkZ~89OTgE25ZHvlBqOfE12l7POdV8p8Qp9d0El3kcqtO152AcJzy-JBLEDbbctnU1X3o0gnnCmefwmhhM9A-sr6OY3cB6R~3MdPVst5DIaqWOROcp6tnROdaCFBQ__'} size={80}></ProfileAvatar>
          <div>
            <p className="font-bold text-lg">John Doe</p>
            <p className="text-gray-500">johndoe@email.com</p>
          </div>
        </div>

        {/* Navigation Items */}
        <nav className="pl-4 pt-6 pb-5 space-y-4">
          <button className="flex items-center space-x-3 text-gray-700 hover:text-blue-500">
            {/* <FaInfoCircle size={20} /> */}
            <span>Dashboard</span>
          </button>
          <button className="flex items-center space-x-3 text-gray-700 hover:text-blue-500">
            {/* <FaCommentDots size={20} /> */}
            <span>Messages</span>
          </button>
        </nav>
      </div>
      </>
    );
  }
