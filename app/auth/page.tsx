"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { MapPin, Shield, Heart, Phone, Mail, User, Lock } from "lucide-react"

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true)
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    email: "",
    phone: "",
    password: "",
    name: "",
    age: "",
    gender: "",
    location: "",
    insurance: "",
    emergencyContact: "",
    conditions: [] as string[],
    languages: [] as string[],
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleConditionToggle = (condition: string) => {
    setFormData((prev) => ({
      ...prev,
      conditions: prev.conditions.includes(condition)
        ? prev.conditions.filter((c) => c !== condition)
        : [...prev.conditions, condition],
    }))
  }

  const handleLanguageToggle = (language: string) => {
    setFormData((prev) => ({
      ...prev,
      languages: prev.languages.includes(language)
        ? prev.languages.filter((l) => l !== language)
        : [...prev.languages, language],
    }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-accent/5 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
              <Heart className="w-6 h-6 text-primary-foreground" />
            </div>
            <h1 className="text-2xl font-bold text-foreground">CareNav</h1>
          </div>
          <p className="text-muted-foreground">Your trusted healthcare navigator</p>
        </div>

        <Tabs value={isLogin ? "login" : "register"} onValueChange={(value) => setIsLogin(value === "login")}>
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="login">Sign In</TabsTrigger>
            <TabsTrigger value="register">Sign Up</TabsTrigger>
          </TabsList>

          <TabsContent value="login">
            <Card className="border-2 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="w-5 h-5 text-primary" />
                  Welcome Back
                </CardTitle>
                <CardDescription>Sign in to access your healthcare navigator</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      className="pl-10"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                    <Input
                      id="password"
                      type="password"
                      placeholder="Enter your password"
                      className="pl-10"
                      value={formData.password}
                      onChange={(e) => handleInputChange("password", e.target.value)}
                    />
                  </div>
                </div>
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">Sign In</Button>
                <div className="text-center">
                  <Button variant="outline" className="w-full bg-transparent">
                    <Phone className="w-4 h-4 mr-2" />
                    Sign in with Phone OTP
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="register">
            <Card className="border-2 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-primary" />
                  Create Account - Step {step} of 3
                </CardTitle>
                <CardDescription>
                  {step === 1 && "Basic account information"}
                  {step === 2 && "Personal & health details"}
                  {step === 3 && "Preferences & emergency contacts"}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {step === 1 && (
                  <>
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <div className="relative">
                        <User className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                        <Input
                          id="name"
                          placeholder="Enter your full name"
                          className="pl-10"
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="reg-email">Email</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                        <Input
                          id="reg-email"
                          type="email"
                          placeholder="your@email.com"
                          className="pl-10"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                        <Input
                          id="phone"
                          placeholder="+1 (555) 123-4567"
                          className="pl-10"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="reg-password">Password</Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                        <Input
                          id="reg-password"
                          type="password"
                          placeholder="Create a strong password"
                          className="pl-10"
                          value={formData.password}
                          onChange={(e) => handleInputChange("password", e.target.value)}
                        />
                      </div>
                    </div>
                  </>
                )}

                {step === 2 && (
                  <>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="age">Age</Label>
                        <Input
                          id="age"
                          type="number"
                          placeholder="25"
                          value={formData.age}
                          onChange={(e) => handleInputChange("age", e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="gender">Gender</Label>
                        <Select value={formData.gender} onValueChange={(value) => handleInputChange("gender", value)}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="male">Male</SelectItem>
                            <SelectItem value="female">Female</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                            <SelectItem value="prefer-not-to-say">Prefer not to say</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="location">Current Location</Label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                        <Input
                          id="location"
                          placeholder="City, State/Country"
                          className="pl-10"
                          value={formData.location}
                          onChange={(e) => handleInputChange("location", e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="insurance">Insurance Provider</Label>
                      <Input
                        id="insurance"
                        placeholder="e.g., Blue Cross, Aetna, or None"
                        value={formData.insurance}
                        onChange={(e) => handleInputChange("insurance", e.target.value)}
                      />
                    </div>
                    <div className="space-y-3">
                      <Label>Health Conditions (Optional)</Label>
                      <div className="grid grid-cols-2 gap-2">
                        {["Diabetes", "Hypertension", "Asthma", "Heart Disease", "Allergies", "Other"].map(
                          (condition) => (
                            <div key={condition} className="flex items-center space-x-2">
                              <Checkbox
                                id={condition}
                                checked={formData.conditions.includes(condition)}
                                onCheckedChange={() => handleConditionToggle(condition)}
                              />
                              <Label htmlFor={condition} className="text-sm">
                                {condition}
                              </Label>
                            </div>
                          ),
                        )}
                      </div>
                    </div>
                  </>
                )}

                {step === 3 && (
                  <>
                    <div className="space-y-2">
                      <Label htmlFor="emergency">Emergency Contact</Label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                        <Input
                          id="emergency"
                          placeholder="Emergency contact number"
                          className="pl-10"
                          value={formData.emergencyContact}
                          onChange={(e) => handleInputChange("emergencyContact", e.target.value)}
                        />
                      </div>
                    </div>
                    <div className="space-y-3">
                      <Label>Preferred Languages</Label>
                      <div className="grid grid-cols-2 gap-2">
                        {["English", "Spanish", "French", "German", "Hindi", "Mandarin"].map((language) => (
                          <div key={language} className="flex items-center space-x-2">
                            <Checkbox
                              id={language}
                              checked={formData.languages.includes(language)}
                              onCheckedChange={() => handleLanguageToggle(language)}
                            />
                            <Label htmlFor={language} className="text-sm">
                              {language}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="bg-accent/10 p-4 rounded-lg border border-accent/20">
                      <h4 className="font-medium text-accent-foreground mb-2">Privacy & Data</h4>
                      <p className="text-sm text-muted-foreground">
                        Your health information is encrypted and only used to provide better healthcare recommendations.
                      </p>
                    </div>
                  </>
                )}

                <div className="flex gap-2">
                  {step > 1 && (
                    <Button variant="outline" onClick={() => setStep(step - 1)} className="flex-1">
                      Previous
                    </Button>
                  )}
                  <Button
                    onClick={() => (step < 3 ? setStep(step + 1) : console.log("Complete registration"))}
                    className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    {step < 3 ? "Next" : "Complete Registration"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
