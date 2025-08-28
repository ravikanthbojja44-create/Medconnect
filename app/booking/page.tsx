"use client"

import { useState } from "react"
import { ArrowLeft, CreditCard, CheckCircle, Star, Video, Stethoscope, Calendar, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import Link from "next/link"
import { useSearchParams } from "next/navigation"

export default function BookingPage() {
  const [step, setStep] = useState(1)
  const searchParams = useSearchParams()
  const doctorId = searchParams.get("doctor") || "1"
  const hospitalId = searchParams.get("hospital")

  const [bookingData, setBookingData] = useState({
    doctorId: doctorId,
    appointmentType: "in-person",
    date: "",
    time: "",
    reason: "",
    symptoms: "",
    patientName: "",
    patientEmail: "",
    patientPhone: "",
    insurance: "",
    emergencyContact: "",
    notes: "",
    paymentMethod: "",
  })

  const doctorsData = {
    "1": {
      id: "1",
      name: "Dr. Sarah Johnson",
      specialty: "Cardiology",
      rating: 4.9,
      image: "/female-doctor.png",
      hospital: "City General Hospital",
      fee: "$250",
      videoFee: "$150",
    },
    "2": {
      id: "2",
      name: "Dr. Michael Chen",
      specialty: "Emergency Medicine",
      rating: 4.8,
      image: "/male-doctor.png",
      hospital: "City General Hospital",
      fee: "$200",
      videoFee: "$120",
    },
    "6": {
      id: "6",
      name: "Dr. Amanda Foster",
      specialty: "Pediatric Emergency Medicine",
      rating: 4.9,
      image: "/female-pediatrician.png",
      hospital: "Metro Children's Hospital",
      fee: "$180",
      videoFee: "$100",
    },
  }

  const doctor = doctorsData[doctorId as keyof typeof doctorsData] || doctorsData["1"]

  const availableSlots = [
    { date: "2024-01-15", day: "Today", slots: ["2:00 PM", "3:30 PM", "4:45 PM"] },
    { date: "2024-01-16", day: "Tomorrow", slots: ["9:00 AM", "10:30 AM", "2:00 PM", "3:30 PM"] },
    { date: "2024-01-17", day: "Wed, Jan 17", slots: ["9:00 AM", "11:00 AM", "1:00 PM", "4:00 PM"] },
    { date: "2024-01-18", day: "Thu, Jan 18", slots: ["10:00 AM", "2:30 PM", "4:00 PM"] },
  ]

  const appointmentTypes = [
    {
      id: "in-person",
      title: "In-Person Consultation",
      description: "Physical examination at the clinic",
      duration: "30-45 minutes",
      fee: doctor.fee,
      icon: Stethoscope,
    },
    {
      id: "video",
      title: "Video Consultation",
      description: "Online consultation via video call",
      duration: "20-30 minutes",
      fee: doctor.videoFee,
      icon: Video,
    },
  ]

  const handleInputChange = (field: string, value: string) => {
    setBookingData((prev) => ({ ...prev, [field]: value }))
  }

  const handleNext = () => {
    if (step < 4) setStep(step + 1)
  }

  const handlePrevious = () => {
    if (step > 1) setStep(step - 1)
  }

  const handleBooking = () => {
    // Handle booking submission
    console.log("Booking submitted:", bookingData)
    setStep(5) // Success step
  }

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* Header */}
      <header className="bg-card border-b border-border px-4 py-4 sticky top-0 z-10">
        <div className="flex items-center gap-3">
          <Link href={hospitalId ? `/hospital/${hospitalId}` : `/doctor/${doctor.id}`}>
            <Button variant="ghost" size="icon" className="rounded-full">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
          <div className="flex-1">
            <h1 className="text-xl font-bold text-foreground">Book Appointment</h1>
            <p className="text-sm text-muted-foreground">Step {step} of 4</p>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-4">
          <div className="flex justify-between mb-2">
            {[1, 2, 3, 4].map((stepNum) => (
              <div
                key={stepNum}
                className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium ${
                  stepNum <= step ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                }`}
              >
                {stepNum < step ? <CheckCircle className="h-4 w-4" /> : stepNum}
              </div>
            ))}
          </div>
          <div className="w-full bg-muted rounded-full h-2">
            <div
              className="bg-primary h-2 rounded-full transition-all duration-300"
              style={{ width: `${(step / 4) * 100}%` }}
            />
          </div>
        </div>
      </header>

      <div className="px-4 py-6">
        {step === 1 && (
          <div className="space-y-6">
            {/* Doctor Info */}
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center space-x-3">
                  <Avatar className="w-16 h-16">
                    <AvatarImage src={doctor.image || "/placeholder.svg"} alt={doctor.name} />
                    <AvatarFallback>
                      {doctor.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground">{doctor.name}</h3>
                    <p className="text-sm text-muted-foreground">{doctor.specialty}</p>
                    <p className="text-sm text-muted-foreground">{doctor.hospital}</p>
                    <div className="flex items-center mt-1">
                      <Star className="h-4 w-4 text-accent fill-current mr-1" />
                      <span className="text-sm font-medium">{doctor.rating}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Appointment Type */}
            <div>
              <h2 className="text-lg font-semibold text-foreground mb-4">Select Appointment Type</h2>
              <RadioGroup
                value={bookingData.appointmentType}
                onValueChange={(value) => handleInputChange("appointmentType", value)}
              >
                <div className="space-y-3">
                  {appointmentTypes.map((type) => (
                    <Card
                      key={type.id}
                      className={`cursor-pointer transition-all ${
                        bookingData.appointmentType === type.id
                          ? "ring-2 ring-primary border-primary"
                          : "hover:shadow-md"
                      }`}
                      onClick={() => handleInputChange("appointmentType", type.id)}
                    >
                      <CardContent className="p-4">
                        <div className="flex items-start space-x-3">
                          <RadioGroupItem value={type.id} id={type.id} className="mt-1" />
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <div className="flex items-center">
                                <type.icon className="h-5 w-5 text-primary mr-2" />
                                <h3 className="font-medium">{type.title}</h3>
                              </div>
                              <Badge variant="secondary">{type.fee}</Badge>
                            </div>
                            <p className="text-sm text-muted-foreground mb-1">{type.description}</p>
                            <p className="text-xs text-muted-foreground">Duration: {type.duration}</p>
                            {type.id === "video" && (
                              <div className="mt-2 p-2 bg-blue-50 rounded-md">
                                <p className="text-xs text-blue-700 font-medium">Video Consultation Benefits:</p>
                                <ul className="text-xs text-blue-600 mt-1 space-y-1">
                                  <li>• No travel required</li>
                                  <li>• Secure HD video call</li>
                                  <li>• Digital prescription</li>
                                  <li>• Screen sharing for reports</li>
                                </ul>
                              </div>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </RadioGroup>
            </div>

            <Button onClick={handleNext} className="w-full bg-primary hover:bg-primary/90">
              Continue
            </Button>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6">
            <h2 className="text-lg font-semibold text-foreground">Select Date & Time</h2>

            {/* Date Selection */}
            <div className="space-y-4">
              {availableSlots.map((daySlots) => (
                <Card key={daySlots.date}>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base">{daySlots.day}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-3 gap-2">
                      {daySlots.slots.map((slot) => (
                        <Button
                          key={slot}
                          variant={
                            bookingData.date === daySlots.date && bookingData.time === slot ? "default" : "outline"
                          }
                          size="sm"
                          onClick={() => {
                            handleInputChange("date", daySlots.date)
                            handleInputChange("time", slot)
                          }}
                          className="text-xs"
                        >
                          {slot}
                        </Button>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="flex gap-3">
              <Button variant="outline" onClick={handlePrevious} className="flex-1 bg-transparent">
                Previous
              </Button>
              <Button
                onClick={handleNext}
                disabled={!bookingData.date || !bookingData.time}
                className="flex-1 bg-primary hover:bg-primary/90"
              >
                Continue
              </Button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-6">
            <h2 className="text-lg font-semibold text-foreground">Patient Information</h2>

            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="patientName">Full Name *</Label>
                <Input
                  id="patientName"
                  placeholder="Enter patient's full name"
                  value={bookingData.patientName}
                  onChange={(e) => handleInputChange("patientName", e.target.value)}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="patientEmail">Email *</Label>
                  <Input
                    id="patientEmail"
                    type="email"
                    placeholder="email@example.com"
                    value={bookingData.patientEmail}
                    onChange={(e) => handleInputChange("patientEmail", e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="patientPhone">Phone *</Label>
                  <Input
                    id="patientPhone"
                    placeholder="+1 (555) 123-4567"
                    value={bookingData.patientPhone}
                    onChange={(e) => handleInputChange("patientPhone", e.target.value)}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="insurance">Insurance Provider</Label>
                <Select value={bookingData.insurance} onValueChange={(value) => handleInputChange("insurance", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select insurance provider" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="blue-cross">Blue Cross Blue Shield</SelectItem>
                    <SelectItem value="aetna">Aetna</SelectItem>
                    <SelectItem value="medicare">Medicare</SelectItem>
                    <SelectItem value="united">United Healthcare</SelectItem>
                    <SelectItem value="cigna">Cigna</SelectItem>
                    <SelectItem value="none">No Insurance</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="reason">Reason for Visit *</Label>
                <Select value={bookingData.reason} onValueChange={(value) => handleInputChange("reason", value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select reason for visit" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="routine">Routine Check-up</SelectItem>
                    <SelectItem value="follow-up">Follow-up Visit</SelectItem>
                    <SelectItem value="symptoms">New Symptoms</SelectItem>
                    <SelectItem value="consultation">Second Opinion</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="symptoms">Symptoms or Concerns</Label>
                <Textarea
                  id="symptoms"
                  placeholder="Describe your symptoms or concerns..."
                  value={bookingData.symptoms}
                  onChange={(e) => handleInputChange("symptoms", e.target.value)}
                  rows={3}
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="emergencyContact">Emergency Contact</Label>
                <Input
                  id="emergencyContact"
                  placeholder="Emergency contact name and phone"
                  value={bookingData.emergencyContact}
                  onChange={(e) => handleInputChange("emergencyContact", e.target.value)}
                />
              </div>
            </div>

            <div className="flex gap-3">
              <Button variant="outline" onClick={handlePrevious} className="flex-1 bg-transparent">
                Previous
              </Button>
              <Button
                onClick={handleNext}
                disabled={
                  !bookingData.patientName ||
                  !bookingData.patientEmail ||
                  !bookingData.patientPhone ||
                  !bookingData.reason
                }
                className="flex-1 bg-primary hover:bg-primary/90"
              >
                Continue
              </Button>
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="space-y-6">
            <h2 className="text-lg font-semibold text-foreground">Review & Confirm</h2>

            {/* Appointment Summary */}
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Appointment Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Doctor</span>
                  <span className="text-sm font-medium">{doctor.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Type</span>
                  <div className="flex items-center">
                    <span className="text-sm font-medium">
                      {appointmentTypes.find((t) => t.id === bookingData.appointmentType)?.title}
                    </span>
                    {bookingData.appointmentType === "video" && <Video className="h-4 w-4 text-blue-600 ml-2" />}
                  </div>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Date & Time</span>
                  <span className="text-sm font-medium">
                    {availableSlots.find((d) => d.date === bookingData.date)?.day} at {bookingData.time}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Patient</span>
                  <span className="text-sm font-medium">{bookingData.patientName}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Reason</span>
                  <span className="text-sm font-medium">{bookingData.reason}</span>
                </div>
                <Separator />
                <div className="flex justify-between">
                  <span className="font-medium">Total Fee</span>
                  <span className="font-medium text-primary">
                    {appointmentTypes.find((t) => t.id === bookingData.appointmentType)?.fee}
                  </span>
                </div>
                {bookingData.appointmentType === "video" && (
                  <div className="mt-3 p-3 bg-blue-50 rounded-md">
                    <p className="text-sm font-medium text-blue-800 mb-2">Video Consultation Setup:</p>
                    <ul className="text-xs text-blue-700 space-y-1">
                      <li>• You'll receive a video link 30 minutes before your appointment</li>
                      <li>• Ensure stable internet connection and working camera/microphone</li>
                      <li>• Have your ID and insurance card ready</li>
                      <li>• Test your device at carenav.com/video-test</li>
                    </ul>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Payment Method */}
            <Card>
              <CardHeader>
                <CardTitle className="text-base">Payment Method</CardTitle>
              </CardHeader>
              <CardContent>
                <RadioGroup
                  value={bookingData.paymentMethod}
                  onValueChange={(value) => handleInputChange("paymentMethod", value)}
                >
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="card" id="card" />
                      <Label htmlFor="card" className="flex items-center">
                        <CreditCard className="h-4 w-4 mr-2" />
                        Credit/Debit Card
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="insurance" id="insurance" />
                      <Label htmlFor="insurance">Insurance Coverage</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="cash" id="cash" />
                      <Label htmlFor="cash">
                        {bookingData.appointmentType === "video" ? "Pay Online" : "Pay at Clinic"}
                      </Label>
                    </div>
                  </div>
                </RadioGroup>
              </CardContent>
            </Card>

            {/* Terms */}
            <div className="flex items-start space-x-2">
              <Checkbox id="terms" />
              <Label htmlFor="terms" className="text-sm text-muted-foreground">
                I agree to the terms and conditions and privacy policy. I understand the cancellation policy.
                {bookingData.appointmentType === "video" && " I consent to video consultation and data transmission."}
              </Label>
            </div>

            <div className="flex gap-3">
              <Button variant="outline" onClick={handlePrevious} className="flex-1 bg-transparent">
                Previous
              </Button>
              <Button
                onClick={handleBooking}
                disabled={!bookingData.paymentMethod}
                className="flex-1 bg-primary hover:bg-primary/90"
              >
                Confirm Booking
              </Button>
            </div>
          </div>
        )}

        {step === 5 && (
          <div className="text-center space-y-6">
            <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle className="h-10 w-10 text-accent" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-foreground mb-2">Booking Confirmed!</h2>
              <p className="text-muted-foreground">
                Your appointment has been successfully booked. You will receive a confirmation email shortly.
              </p>
            </div>

            <Card>
              <CardContent className="p-4">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Booking ID</span>
                    <span className="text-sm font-medium">#APT-2024-001</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Date & Time</span>
                    <span className="text-sm font-medium">
                      {availableSlots.find((d) => d.date === bookingData.date)?.day} at {bookingData.time}
                    </span>
                  </div>
                  {bookingData.appointmentType === "video" && (
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Video Link</span>
                      <span className="text-sm font-medium text-blue-600">Will be sent 30 min before</span>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            <div className="space-y-3">
              {bookingData.appointmentType === "video" && (
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  <Video className="h-4 w-4 mr-2" />
                  Test Video Setup
                </Button>
              )}
              <Button className="w-full bg-primary hover:bg-primary/90">
                <Calendar className="h-4 w-4 mr-2" />
                Add to Calendar
              </Button>
              <Button variant="outline" className="w-full bg-transparent">
                <Phone className="h-4 w-4 mr-2" />
                Contact Doctor's Office
              </Button>
              <Link href="/">
                <Button variant="outline" className="w-full bg-transparent">
                  Back to Home
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
