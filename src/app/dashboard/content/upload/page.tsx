// src/app/dashboard/content/upload/page.tsx

import React from 'react';
import Link from 'next/link';
import { Button, Card, CardContent, CardHeader, CardTitle, Tabs, TabsList, TabsTrigger, TabsContent, FileUpload } from '@/app/components/ui';

export default function ContentUploadPage() {
  return (
    <div className="bg-neutral-50 min-h-screen">
      <div className="container-wide py-8">
        <div className="flex items-center mb-8">
          <Link href="/dashboard" className="text-primary-600 hover:text-primary-700 mr-2">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </Link>
          <h1 className="text-3xl font-bold text-neutral-900">Upload Content</h1>
        </div>

        <p className="text-neutral-600 mb-8">
          Upload content to train your AI twin. The more content you provide, the more accurate your digital twin will be.
        </p>

        <Tabs defaultValue="voice">
          <TabsList className="mb-8">
            <TabsTrigger value="voice">Voice</TabsTrigger>
            <TabsTrigger value="video">Video</TabsTrigger>
            <TabsTrigger value="knowledge">Knowledge</TabsTrigger>
          </TabsList>

          <TabsContent value="voice">
            <Card>
              <CardHeader>
                <CardTitle>Voice Training</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-600 mb-6">
                  Upload audio recordings of your voice. We recommend at least 10 minutes of clear audio for best results.
                  Try to include a variety of tones, pacing, and speech patterns.
                </p>

                <div className="mb-8">
                  <h3 className="text-lg font-medium mb-4">Tips for good voice samples:</h3>
                  <ul className="list-disc pl-5 space-y-2 text-neutral-600">
                    <li>Record in a quiet environment with minimal background noise</li>
                    <li>Speak clearly and at your natural pace</li>
                    <li>Include a variety of emotional tones (happy, serious, excited, etc.)</li>
                    <li>Try to cover topics you frequently discuss</li>
                    <li>Supported formats: MP3, WAV, M4A (max 100MB per file)</li>
                  </ul>
                </div>

                <FileUpload
                  label="Upload Voice Recordings"
                  accept=".mp3,.wav,.m4a"
                  multiple={true}
                  maxSize={104857600} // 100MB
                  buttonText="Choose Audio Files"
                  helpText="Drag and drop audio files or click to browse. Max 100MB per file."
                />

                <div className="mt-8 flex justify-end">
                  <Button variant="primary">Upload Files</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="video">
            <Card>
              <CardHeader>
                <CardTitle>Video Training</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-600 mb-6">
                  Upload videos to train your AI twin on your visual appearance, mannerisms, and expressions.
                  We recommend at least 5 minutes of clear video footage showing your face.
                </p>

                <div className="mb-8">
                  <h3 className="text-lg font-medium mb-4">Tips for good video samples:</h3>
                  <ul className="list-disc pl-5 space-y-2 text-neutral-600">
                    <li>Record in good lighting with your face clearly visible</li>
                    <li>Include a variety of facial expressions and head movements</li>
                    <li>Try to capture your natural speaking style and mannerisms</li>
                    <li>Film from different angles if possible</li>
                    <li>Supported formats: MP4, MOV, AVI (max 500MB per file)</li>
                  </ul>
                </div>

                <FileUpload
                  label="Upload Video Recordings"
                  accept=".mp4,.mov,.avi"
                  multiple={true}
                  maxSize={524288000} // 500MB
                  buttonText="Choose Video Files"
                  helpText="Drag and drop video files or click to browse. Max 500MB per file."
                />

                <div className="mt-8 flex justify-end">
                  <Button variant="primary">Upload Files</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="knowledge">
            <Card>
              <CardHeader>
                <CardTitle>Knowledge Base</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-600 mb-6">
                  Upload documents, articles, books, or other written content that represents your knowledge, 
                  expertise, and writing style. This will help your AI twin provide accurate information.
                </p>

                <div className="mb-8">
                  <h3 className="text-lg font-medium mb-4">Tips for good knowledge samples:</h3>
                  <ul className="list-disc pl-5 space-y-2 text-neutral-600">
                    <li>Include content that showcases your expertise and unique perspectives</li>
                    <li>Upload articles, blog posts, books, or transcripts you've written</li>
                    <li>Include a variety of topics within your area of expertise</li>
                    <li>The more content you provide, the more knowledgeable your twin will be</li>
                    <li>Supported formats: PDF, DOCX, TXT (max 50MB per file)</li>
                  </ul>
                </div>

                <FileUpload
                  label="Upload Knowledge Documents"
                  accept=".pdf,.docx,.txt"
                  multiple={true}
                  maxSize={52428800} // 50MB
                  buttonText="Choose Documents"
                  helpText="Drag and drop documents or click to browse. Max 50MB per file."
                />

                <div className="mt-8 flex justify-end">
                  <Button variant="primary">Upload Files</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
