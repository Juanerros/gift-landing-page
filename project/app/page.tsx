'use client'

import { AudioPlayer } from '@/components/audio-player'
import { Heart } from 'lucide-react'
import Image from 'next/image'

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || ''

export default function GiftPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-[#faf8f6] to-background flex flex-col items-center justify-center p-4 md:p-8">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl -z-10" />
      <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-2xl -z-10" />

      {/* Container with soft shadow */}
      <div className="w-full max-w-md">
        {/* Header with greeting */}
        <div className="text-center mb-12 space-y-2">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Heart size={20} className="text-primary animate-pulse" />
            <h1 className="text-3xl md:text-4xl font-light text-foreground">
              <span className="font-semibold">RECORDAR:</span> VOLVER A PASAR POR EL CORAZÓN
            </h1>
            <Heart size={20} className="text-primary animate-pulse" />
          </div>
          <p className="text-sm text-muted-foreground">Haz clic para escuchar el mensaje</p>
        </div>

        {/* Photo Frame */}
        <div className="mb-12">
          <div className="relative group">
            {/* Decorative frame background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl blur-md group-hover:blur-lg transition-all duration-300" />
            
            {/* Main photo container */}
            <div className="relative bg-white rounded-2xl overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-300 aspect-square md:aspect-auto md:h-96">
              <Image
                src={`${basePath}/popi.jpeg?height=400&width=400`}
                alt="Foto especial"
                fill
                className="object-cover"
                priority
              />
              
              {/* Soft overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>

            {/* Decorative corner details */}
            <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-primary/30 rounded-tl-lg" />
            <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-secondary/30 rounded-br-lg" />
          </div>
        </div>

        {/* Audio Player */}
        <div className="flex justify-center mb-12">
          <div className="bg-white/50 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-white/40">
            <AudioPlayer />
          </div>
        </div>

        {/* Message */}
        <div className="text-center space-y-4 px-4">
          <p className="text-sm md:text-base text-foreground/70 leading-relaxed">
            Un mensaje especial para una persona especial
          </p>
          
          {/* Decorative elements */}
          <div className="flex justify-center gap-2 pt-4">
            <div className="w-1.5 h-1.5 rounded-full bg-primary/40" />
            <div className="w-1.5 h-1.5 rounded-full bg-secondary/40" />
            <div className="w-1.5 h-1.5 rounded-full bg-accent/40" />
          </div>
        </div>
      </div>

      {/* Bottom decoration */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-1">
        <div className="w-1 h-1 rounded-full bg-primary/30 animate-bounce" style={{ animationDelay: '0s' }} />
        <div className="w-1 h-1 rounded-full bg-secondary/30 animate-bounce" style={{ animationDelay: '0.1s' }} />
        <div className="w-1 h-1 rounded-full bg-accent/30 animate-bounce" style={{ animationDelay: '0.2s' }} />
      </div>
    </main>
  )
}
