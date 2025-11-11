import React from 'react';
import { Calendar, Clock, MapPin, User } from 'lucide-react';
import { Card } from '@/components/ui/card';

const EventDetails = () => {
  return (
    <section className="py-20 px-4 bg-background relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Detail Acara
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <Card className="p-6 shadow-festive hover:shadow-glow transition-smooth border-2">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-xl">
                <Calendar className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Hari & Tanggal</h3>
                <p className="text-foreground/70">Jumat, 12 Desember 2025</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 shadow-festive hover:shadow-glow transition-smooth border-2">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-xl">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Waktu</h3>
                <p className="text-foreground/70">11:00 WIB - Selesai</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 shadow-festive hover:shadow-glow transition-smooth border-2">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-xl">
                <User className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Pengkhotbah</h3>
                <p className="text-foreground/70">Pdt. Dr. Mangapoi Marbun, M.Th.</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 shadow-festive hover:shadow-glow transition-smooth border-2">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-primary/10 rounded-xl">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-1">Lokasi</h3>
                <p className="text-foreground/70">GBI Jalan Angkatan 66 No. 4, Aekkanopan</p>
              </div>
            </div>
          </Card>
        </div>

        <Card className="overflow-hidden shadow-festive border-2">
          <div className="aspect-video w-full">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3985.8224018724763!2d99.64648520987068!3d2.564517297402909!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3032711b560f83a1%3A0x994e122c4788d6d5!2sGBI%20(Gereja%20Bethel%20Indonesia)%20Angkatan%2066!5e0!3m2!1sid!2sid!4v1762851443947!5m2!1sid!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Lokasi Gereja GBI Jalan Angkatan 66"
            />
          </div>
        </Card>
      </div>
    </section>
  );
};

export default EventDetails;
