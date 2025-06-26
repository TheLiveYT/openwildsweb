
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Copy, CheckCircle, Monitor, Smartphone, Users, Antenna, Rocket} from "lucide-react";
import { toast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const JoinServer = () => {
  const [copied, setCopied] = useState(false);
  const serverIP = "mc.openwilds.com";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(serverIP);
    setCopied(true);
    toast({
      title: "Server IP Copied!",
      description: "The server IP has been copied to your clipboard.",
    });
    setTimeout(() => setCopied(false), 2000);
  };

  const serverStats = {
    onlinePlayers: 18,
    maxPlayers: 100,
    uptime: "99.8%",
    version: "1.21.x"
  };

  return (
    <div className="min-h-screen bg-black-50">
      <Header />
      
      <div className="pt-24 pb-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Join Our Server</h1>
            <p className="text-xl text-gray-400">
              Ready to start your adventure? Connect to our Minecraft server now!
            </p>
          </div>

          {/* Server IP Card */}
          <Card className="mb-8 text-center">
            <CardHeader>
              <CardTitle className="text-green-600">Server Address</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-100 rounded-lg p-6 mb-6">
                <code className="text-3xl font-mono text-green-600 font-bold">{serverIP}</code>
              </div>
              <Button 
                onClick={copyToClipboard}
                size="lg"
                className="bg-green-600 hover:bg-green-700 text-white"
              >
                {copied ? <CheckCircle className="w-5 h-5 mr-2" /> : <Copy className="w-5 h-5 mr-2" />}
                {copied ? "Copied!" : "Copy Server IP"}
              </Button>
            </CardContent>
          </Card>

          {/* Server Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <Card>
              <CardContent className="p-4 text-center">
                <Users className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-200">{serverStats.onlinePlayers}/{serverStats.maxPlayers}</div>
                <div className="text-sm text-white">Players Online</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <div className="w-8 h-8 bg-green-600 rounded-full mx-auto mb-2 flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                <div className="text-2xl font-bold text-green-600">Online</div>
                <div className="text-sm text-white">Server Status</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <Antenna className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-200">{serverStats.uptime}</div>
                <div className="text-sm text-white">Uptime</div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 text-center">
                <Rocket className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <div className="text-2xl font-bold text-gray-200">{serverStats.version}</div>
                <div className="text-sm text-white">Version</div>
              </CardContent>
            </Card>
          </div>

          {/* How to Join */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-blue-600">
                  <Monitor className="w-6 h-6 mr-2 text-blue-600" />
                  Java Edition (PC)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="space-y-3 text-gray-700">
                  <li className="flex">
                    <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">1</span>
                    <span className="text-white">Open Minecraft Java Edition</span>
                  </li>
                  <li className="flex">
                    <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">2</span>
                    <span className="text-white">Click "Multiplayer"</span>
                  </li>
                  <li className="flex">
                    <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">3</span>
                    <span className="text-white">Click "Add Server"</span>
                  </li>
                  <li className="flex">
                    <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">4</span>
                    <span className="text-white">Enter <code className="bg-gray-100 px-2 py-1 rounded text-gray-800">mc.openwilds.com</code> as the server address</span>
                  </li>
                  <li className="flex">
                    <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">5</span>
                    <span className="text-white">Click "Done" and then "Join Server"</span>
                  </li>
                </ol>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-green-600">
                  <Smartphone className="w-6 h-6 mr-2 text-green-600" />
                  Bedrock Edition (Mobile/Console)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="space-y-3 text-gray-700">
                  <li className="flex">
                    <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">1</span>
                    <span className="text-white">Open Minecraft Bedrock Edition</span>
                  </li>
                  <li className="flex">
                    <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">2</span>
                    <span className="text-white">Go to "Play" → "Servers"</span>
                  </li>
                  <li className="flex">
                    <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">3</span>
                    <span className="text-white">Scroll down and click "Add Server"</span>
                  </li>
                  <li className="flex">
                    <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">4</span>
                    <span className="text-white">Enter <code className="bg-gray-100 px-2 py-1 rounded text-gray-800">mc.openwilds.com</code> and port <code className="bg-gray-100 px-2 py-1 rounded text-gray-800">19132</code></span>
                  </li>
                  <li className="flex">
                    <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5">5</span>
                    <span className="text-white">Save and join the server</span>
                  </li>
                </ol>
                <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <p className="text-sm text-yellow-800">
                    <strong>Note:</strong> Bedrock support may be limited. Java Edition is recommended for the best experience.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default JoinServer;
