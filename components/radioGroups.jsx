import { useState } from 'react'
import { RadioGroup } from '@headlessui/react'

const plans = [
  { name: 'Alle 2 Wochen'},
  { name: 'Monatlich'},
  { name: 'Vierteljahrlich'},
  { name: 'Halbjahrlich'},
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function RadioGroups () {
  const [selected, setSelected] = useState(plans[0])

  return (
    <RadioGroup value={selected} onChange={setSelected} className="m-6">
      <div className="relative bg-white rounded-md">
        {plans.map((plan) => (
          <RadioGroup.Option
            key={plan.name}
            value={plan}
            className={({ checked }) =>
              classNames(
                'rounded-md my-2 shadow-md',
                checked ? ' border-fuchsia-900 z-10' : 'border-gray-200',
                'relative border px-4 py-2 flex flex-col cursor-pointer md:pl-4 md:pr-6 md:grid md:grid-cols-3'
              )
            }
          >
            {({ active, checked }) => (
              <>
                <div className="flex items-center text-sm">
                  <span
                    className={classNames(
                      checked ? 'bg-fuchsia-900' : 'bg-white border-gray-300',
                      active ? 'ring-fuchsia-900 ' : '',
                      'h-4 w-4 rounded-full border flex items-center justify-center'
                    )}
                    aria-hidden="true"
                  >
                  </span>
                  <RadioGroup.Label
                    as="span"
                    className={classNames(checked ? 'text-indigo-900' : 'text-gray-900', 'ml-3 font-medium')}
                  >
                    {plan.name}
                  </RadioGroup.Label>
                </div>
              </>
            )}
          </RadioGroup.Option>
        ))}
      </div>
    </RadioGroup>
  )
}
