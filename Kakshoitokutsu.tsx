'use client'

import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { motion, AnimatePresence } from 'framer-motion'
import { useCurrentTime } from './hooks/useCurrentTime'

export default function Kakshoitokutsu() {
  const currentTime = useCurrentTime()
  const [isMoving, setIsMoving] = useState(false)

  const toggleMoving = () => {
    setIsMoving(!isMoving)
  }

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4">
      <Card className="w-full max-w-md shadow-lg">
        <CardContent className="p-6">
          <div className="bg-black rounded-lg overflow-hidden h-24 flex items-center justify-center relative">
            <AnimatePresence mode="wait">
              {!isMoving && (
                <motion.div
                  key="time"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-white text-4xl font-bold"
                >
                  {currentTime}
                </motion.div>
              )}
              {isMoving && (
                <motion.div
                  key="moving-text"
                  initial={{ x: '140%' }}
                  animate={{ x: '-140%' }}
                  transition={{ repeat: Infinity, duration: 7, ease: 'linear' }}
                  className="text-red-500 text-2xl font-semibold whitespace-nowrap absolute"
                >
                  Hoitokutsu d7e30 30:1
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </CardContent>
      </Card>
      <Button
        onClick={toggleMoving}
        className="mt-4 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-xl transition duration-300 ease-in-out transform hover:scale-105"
      >
        {isMoving ? 'Peruuta kutsu' : 'Hoitokutsu: Huone 30, Sänky 1'}
      </Button>
    </div>
  )
}

