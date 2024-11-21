'use client'

import { Dispatch, SetStateAction } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { SubElementType } from '../BeerTable/types/beerTable'

export default function DialogModal(props:PropsDialogModalType) {

  return (
    <Dialog open={props.isOpen} onClose={props.setOpen} className="relative z-30">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-900 bg-opacity-5 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center mx-4 p-4 text-center s:items-center sm:mx-0 s:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden bg-white text-left shadow-md transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in s:my-8 s:w-full s:max-w-lg data-[closed]:s:translate-y-0 data-[closed]:s:scale-95"
          >
            <div className="bg-white px-4 pb-4 pt-5 s:p-6 s:pb-4">
              <div className="s:flex s:items-start">
                <div className="mt-3 text-center s:ml-4 s:mt-0 s:text-left">
                  <DialogTitle as="h3" className="text-base font-semibold text-gray-900">
                    <a className="font-bold underline hover:no-underline" target='_blank' rel='noopener noreferrer' href={props.elementDialogModalInfo.link}>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="mr-2 size-4 inline-block">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
                      </svg>
                      {props.elementDialogModalInfo.name.replace('- ', '')} 
                    </a>
                  </DialogTitle>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">ABV: {props.elementDialogModalInfo.ABV}, IBU: {props.elementDialogModalInfo.IBU}</p>
                    <p className="text-sm text-gray-500">{props.elementDialogModalInfo.example}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 s:flex s:flex-row-reverse s:px-6">
              <button
                type="button"
                onClick={() => props.setOpen(false)}
                className="inline-flex w-full justify-center rounded-md bg-yellow-500 px-3 py-2 text-sm font-semibold text-gray-800 shadow-sm hover:bg-yellow-400 s:ml-3 s:w-auto"
              >
                Cancel
              </button>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  )
}

type PropsDialogModalType = {
  isOpen: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  elementDialogModalInfo: SubElementType;
}