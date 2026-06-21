import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { text, voiceId } = await request.json();

    if (!text) {
      return NextResponse.json(
        { error: "Falta parámetro: text" },
        { status: 400 }
      );
    }

    const elevenLabsKey = process.env.ELEVENLABS_API_KEY;

    if (!elevenLabsKey) {
      return NextResponse.json({
        mode: "mock_tts",
        success: true,
        message: "TTS pre-generated mock feedback: voice synthesis active (visual waveform only)."
      });
    }

    // ElevenLabs integration call
    const voice = voiceId || "21m00Tcm4TlvDq8ikWAM"; // Default Rachel voice
    const response = await fetch(
      `https://api.elevenlabs.io/v1/text-to-speech/${voice}/stream`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "xi-api-key": elevenLabsKey
        },
        body: JSON.stringify({
          text,
          model_id: "eleven_multilingual_v2",
          voice_settings: {
            stability: 0.5,
            similarity_boost: 0.75
          }
        })
      }
    );

    if (!response.ok) {
      const errText = await response.text();
      console.error("ElevenLabs error details:", response.status, errText);
      throw new Error(`Error en ElevenLabs API request: ${response.status} - ${errText}`);
    }

    const audioBuffer = await response.arrayBuffer();

    return new Response(audioBuffer, {
      headers: {
        "Content-Type": "audio/mpeg"
      }
    });

  } catch (error: any) {
    return NextResponse.json(
      { error: error.message || "Error interno de TTS" },
      { status: 500 }
    );
  }
}
