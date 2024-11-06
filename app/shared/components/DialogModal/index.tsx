'use client'

import { Dispatch, SetStateAction } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { SubElementType } from '../BeerTable/types/beerTable'

export default function DialogModal(props:PropsDialogModalType) {

  return (
    <Dialog open={props.isOpen} onClose={props.setOpen} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-900 bg-opacity-5 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden bg-white text-left shadow-md transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                  <DialogTitle as="h3" className="text-base font-semibold text-gray-900">
                    <a className="underline hover:no-underline" target='_blank' rel='noopener noreferrer' href={props.elementDialogModalInfo.link}>{props.elementDialogModalInfo.name.replace('- ', '')}</a>
                  </DialogTitle>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">ABV: {props.elementDialogModalInfo.ABV}, IBU: {props.elementDialogModalInfo.IBU}</p>
                    <p className="text-sm text-gray-500">{props.elementDialogModalInfo.example}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <button
                type="button"
                onClick={() => props.setOpen(false)}
                className="inline-flex w-full justify-center rounded-md bg-yellow-500 px-3 py-2 text-sm font-semibold text-gray-800 shadow-sm hover:bg-yellow-400 sm:ml-3 sm:w-auto"
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