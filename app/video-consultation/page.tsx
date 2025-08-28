"use client"

import { useState, useEffect } from "react"
import { Video, VideoOff, Mic, MicOff, Phone, Settings, MessageCircle, FileText, Camera, Monitor } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Textarea } from "@/components/ui/textarea"

export default function VideoConsultationPage() {
  const [isVideoOn, setIsVideoOn] = useState(true)
  const [isAudioOn, setIsAudioOn] = useState(true)
  const [isConnected, setIsConnected] = useState(false)
  const [consultationStarted, setConsultationStarted] = useState(false)
  const [notes, setNotes] = useState("")
  const [chatMessages, setChatMessages] = useState([
    { id: 1, sender: "doctor", message: "Hello! I'll be with you in just a moment.", time: "2:00 PM" },
  ])

  const appointment = {
    id: "APT-2024-001",
    doctor: {
      name: "Dr. Sarah Johnson",
      specialty: "Cardiology",
      image: "/female-doctor.png",
    },
    patient: {
      name: "John Doe",
      age: 45,
    },
    time: "2:00 PM",
    date: "Today",
    reason: "Follow-up Consultation",
  }

  useEffect(() => {
    // Simulate connection after 3 seconds
    const timer = setTimeout(() => {
      setIsConnected(true)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  const startConsultation = () => {
    setConsultationStarted(true)
  }

  const endConsultation = () => {
    // Handle ending consultation
    console.log("Consultation ended")
  }

  const toggleVideo = () => {
    setIsVideoOn(!isVideoOn)
  }

  const toggleAudio = () => {
    setIsAudioOn(!isAudioOn)
  }

  if (!isConnected) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardContent className="p-6 text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Video className="h-8 w-8 text-primary animate-pulse" />
            </div>
            <h2 className="text-xl font-bold mb-2">Connecting to Dr. Johnson...</h2>
            <p className="text-muted-foreground mb-4">Please wait while we establish the connection</p>
            <div className="flex items-center justify-center space-x-2">
              <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "0.1s" }}></div>
              <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></div>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Avatar className="w-10 h-10">
              <AvatarImage src={appointment.doctor.image || "/placeholder.svg"} alt={appointment.doctor.name} />
              <AvatarFallback>DJ</AvatarFallback>
            </Avatar>
            <div>
              <h1 className="font-semibold text-foreground">{appointment.doctor.name}</h1>
              <p className="text-sm text-muted-foreground">{appointment.doctor.specialty}</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Badge variant="secondary" className="bg-green-100 text-green-800">
              Connected
            </Badge>
            <span className="text-sm text-muted-foreground">2:05 PM</span>
          </div>
        </div>
      </header>

      <div className="flex h-[calc(100vh-73px)]">
        {/* Main Video Area */}
        <div className="flex-1 flex flex-col">
          {/* Doctor Video */}
          <div className="flex-1 bg-gray-900 relative">
            {consultationStarted ? (
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center text-white">
                  <Avatar className="w-32 h-32 mx-auto mb-4">
                    <AvatarImage src={appointment.doctor.image || "/placeholder.svg"} alt={appointment.doctor.name} />
                    <AvatarFallback className="text-4xl">DJ</AvatarFallback>
                  </Avatar>
                  <h3 className="text-xl font-semibold mb-2">{appointment.doctor.name}</h3>
                  <p className="text-gray-300">Video consultation in progress</p>
                </div>
              </div>
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center text-white">
                  <Video className="w-16 h-16 mx-auto mb-4 text-gray-400" />
                  <h3 className="text-xl font-semibold mb-2">Waiting for doctor to join...</h3>
                  <Button onClick={startConsultation} className="bg-primary hover:bg-primary/90">
                    Start Consultation
                  </Button>
                </div>
              </div>
            )}

            {/* Patient Video (Picture-in-Picture) */}
            <div className="absolute bottom-4 right-4 w-48 h-36 bg-gray-800 rounded-lg border-2 border-white overflow-hidden">
              {isVideoOn ? (
                <div className="w-full h-full flex items-center justify-center text-white">
                  <div className="text-center">
                    <Camera className="w-8 h-8 mx-auto mb-2" />
                    <p className="text-sm">You</p>
                  </div>
                </div>
              ) : (
                <div className="w-full h-full bg-gray-700 flex items-center justify-center">
                  <VideoOff className="w-8 h-8 text-gray-400" />
                </div>
              )}
            </div>
          </div>

          {/* Controls */}
          <div className="bg-gray-800 p-4">
            <div className="flex items-center justify-center space-x-4">
              <Button
                variant={isAudioOn ? "secondary" : "destructive"}
                size="icon"
                className="rounded-full w-12 h-12"
                onClick={toggleAudio}
              >
                {isAudioOn ? <Mic className="h-5 w-5" /> : <MicOff className="h-5 w-5" />}
              </Button>
              <Button
                variant={isVideoOn ? "secondary" : "destructive"}
                size="icon"
                className="rounded-full w-12 h-12"
                onClick={toggleVideo}
              >
                {isVideoOn ? <Video className="h-5 w-5" /> : <VideoOff className="h-5 w-5" />}
              </Button>
              <Button variant="destructive" size="icon" className="rounded-full w-12 h-12" onClick={endConsultation}>
                <Phone className="h-5 w-5" />
              </Button>
              <Button variant="secondary" size="icon" className="rounded-full w-12 h-12">
                <Settings className="h-5 w-5" />
              </Button>
              <Button variant="secondary" size="icon" className="rounded-full w-12 h-12">
                <Monitor className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="w-80 bg-card border-l border-border flex flex-col">
          {/* Appointment Info */}
          <div className="p-4 border-b border-border">
            <h3 className="font-semibold mb-3">Appointment Details</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Patient:</span>
                <span>{appointment.patient.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Age:</span>
                <span>{appointment.patient.age}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Reason:</span>
                <span>{appointment.reason}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Time:</span>
                <span>{appointment.time}</span>
              </div>
            </div>
          </div>

          {/* Chat */}
          <div className="flex-1 flex flex-col">
            <div className="p-4 border-b border-border">
              <h3 className="font-semibold flex items-center">
                <MessageCircle className="h-4 w-4 mr-2" />
                Chat
              </h3>
            </div>
            <div className="flex-1 p-4 overflow-y-auto">
              <div className="space-y-3">
                {chatMessages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.sender === "patient" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-xs p-3 rounded-lg ${
                        message.sender === "patient" ? "bg-primary text-primary-foreground" : "bg-muted text-foreground"
                      }`}
                    >
                      <p className="text-sm">{message.message}</p>
                      <p className="text-xs opacity-70 mt-1">{message.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-4 border-t border-border">
              <div className="flex space-x-2">
                <input
                  type="text"
                  placeholder="Type a message..."
                  className="flex-1 px-3 py-2 border border-border rounded-md text-sm"
                />
                <Button size="sm">Send</Button>
              </div>
            </div>
          </div>

          {/* Notes */}
          <div className="border-t border-border">
            <div className="p-4">
              <h3 className="font-semibold flex items-center mb-3">
                <FileText className="h-4 w-4 mr-2" />
                Consultation Notes
              </h3>
              <Textarea
                placeholder="Add notes during consultation..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                rows={4}
                className="text-sm"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
