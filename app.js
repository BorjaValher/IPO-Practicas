
       // 1. BASE DE DATOS SIMULADA DEL PACIENTE
        const patientData = {
            perfil: {
                nombre: "Alejandro García Martínez",
                id: "DNI: 12345678X",
                nacimiento: "12/05/1990",
                sangre: "O Positivo (O+)",
                peso: "78 kg",
                altura: "182 cm",
                direccion: "Calle Mayor 123, 4B, Madrid, España"
            },
            alergias: ["Penicilina", "Frutos secos", "Látex"],
            contactos: [
                { nombre: "Elena García", relacion: "Hermana", telefono: "+34600000000", principal: true },
                { nombre: "Dr. Roberto Sanz", relacion: "Médico de Cabecera", telefono: "+34912345678", principal: false }
            ],
            medicacion: [
                { nombre: "Ventolin", dosis: "1 inhalación", frecuencia: "SOS", icon: "wind" },
                { nombre: "Cetirizina 10mg", dosis: "1 comprimido", frecuencia: "Noche", icon: "moon" }
            ],
            seguro: {
                compania: "Sanitas / Adeslas",
                poliza: "998877665544",
                tipo: "Cobertura Total"
            },
            historial: [
                { fecha: "Marzo 2023", evento: "Apendicectomía", lugar: "Hospital La Paz", desc: "Cirugía general sin complicaciones." },
                { fecha: "Enero 2021", evento: "Fractura de radio", lugar: "Urgencias Clínicas", desc: "Brazo derecho. Reposo de 4 semanas." },
                { fecha: "Diciembre 2018", evento: "Diagnóstico Asma", lugar: "Neumología", desc: "Asma alérgica estacional leve." }
            ]
        };

        // 2. INICIALIZACIÓN DE LA APP
        document.addEventListener('DOMContentLoaded', () => {
            renderData();
            lucide.createIcons();
        });

        // 3. RENDERIZADO DE DATOS EN EL HTML
        function renderData() {
            // INICIO: Alergias
            const alergiasHtml = patientData.alergias.map(a => `
                <span class="bg-red-50 text-[#d32f2f] border border-red-100 px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1 shadow-sm">
                    <i data-lucide="ban" class="w-3 h-3"></i> ${a}
                </span>
            `).join('');
            document.getElementById('alergias-container').innerHTML = alergiasHtml;
            document.getElementById('sangre-text').innerText = patientData.perfil.sangre;

            // INICIO: Contactos
            const contactosHtml = patientData.contactos.map(c => `
                <div class="bg-white p-4 rounded-2xl shadow-sm border border-slate-200 flex items-center justify-between">
                    <div class="flex items-center gap-4">
                        <div class="${c.principal ? 'bg-blue-50 text-[#00529b]' : 'bg-slate-50 text-slate-400'} p-3 rounded-xl">
                            <i data-lucide="${c.principal ? 'shield-check' : 'user'}" class="w-5 h-5"></i>
                        </div>
                        <div>
                            <p class="font-bold text-slate-800">${c.nombre}</p>
                            <p class="text-xs text-slate-500">${c.relacion}</p>
                        </div>
                    </div>
                    <a href="tel:${c.telefono}" class="bg-green-500 p-3 rounded-xl text-white shadow-lg active:scale-90 transition-transform">
                        <i data-lucide="phone" class="w-5 h-5"></i>
                    </a>
                </div>
            `).join('');
            document.getElementById('contactos-container').innerHTML = contactosHtml;

            // INICIO: Medicación
            const medicacionHtml = patientData.medicacion.map(m => `
                <div class="flex gap-4 p-3 bg-blue-50/50 rounded-2xl border border-blue-100/50">
                    <div class="bg-white p-2 rounded-lg shadow-sm h-fit">
                        <i data-lucide="${m.icon}" class="text-blue-500 w-4 h-4"></i>
                    </div>
                    <div>
                        <p class="font-bold text-sm text-slate-800">${m.nombre}</p>
                        <p class="text-xs text-slate-500">${m.dosis} • <span class="text-blue-600 font-semibold uppercase">${m.frecuencia}</span></p>
                    </div>
                </div>
            `).join('');
            document.getElementById('medicacion-container').innerHTML = medicacionHtml;

            // INICIO: Seguro
            document.getElementById('seguro-compania').innerText = patientData.seguro.compania;
            document.getElementById('seguro-poliza').innerText = patientData.seguro.poliza;
            document.getElementById('seguro-tipo').innerText = patientData.seguro.tipo;

            // HISTORIAL
            const historialHtml = patientData.historial.map(h => `
                <div class="relative pl-6">
                    <div class="absolute w-4 h-4 bg-[#00529b] rounded-full -left-[9px] top-1 border-4 border-slate-50"></div>
                    <p class="text-xs font-bold text-slate-400 mb-1 tracking-widest uppercase">${h.fecha}</p>
                    <div class="bg-white p-4 rounded-2xl shadow-sm border border-slate-200">
                        <h4 class="font-bold text-slate-800 mb-1">${h.evento}</h4>
                        <p class="text-xs text-[#00529b] font-semibold mb-2 flex items-center gap-1">
                            <i data-lucide="building" class="w-3 h-3"></i> ${h.lugar}
                        </p>
                        <p class="text-sm text-slate-500">${h.desc}</p>
                    </div>
                </div>
            `).join('');
            document.getElementById('historial-container').innerHTML = historialHtml;

            // PERFIL
            document.getElementById('perfil-nombre').innerText = patientData.perfil.nombre;
            document.getElementById('perfil-id').innerText = patientData.perfil.id;
            document.getElementById('perfil-direccion').innerHTML = `
                <i data-lucide="map-pin" class="w-4 h-4 text-[#00529b] mt-0.5 shrink-0"></i>
                <span>${patientData.perfil.direccion}</span>
            `;

            const stats = [
                { label: "Nacimiento", val: patientData.perfil.nacimiento },
                { label: "Peso", val: patientData.perfil.peso },
                { label: "Altura", val: patientData.perfil.altura },
                { label: "Sangre", val: patientData.perfil.sangre }
            ];
            
            document.getElementById('perfil-stats-container').innerHTML = stats.map(s => `
                <div class="bg-white p-3 rounded-xl shadow-sm border border-slate-200 text-center">
                    <p class="text-[10px] text-slate-400 font-bold uppercase mb-1">${s.label}</p>
                    <p class="text-sm font-black text-slate-800">${s.val}</p>
                </div>
            `).join('');
        }

        // 4. FUNCIONALIDAD DE PESTAÑAS (NAVEGACIÓN)
        function switchTab(tabId, btnElement) {
            // Ocultar todas las pestañas
            document.querySelectorAll('.tab-content').forEach(tab => {
                tab.classList.remove('active');
            });
            // Mostrar la seleccionada
            document.getElementById(tabId).classList.add('active');

            // Actualizar diseño de botones
            document.querySelectorAll('.nav-btn').forEach(btn => {
                btn.classList.replace('text-[#00529b]', 'text-slate-300');
            });
            btnElement.classList.replace('text-slate-300', 'text-[#00529b]');
            
            // Volver a renderizar iconos en la nueva pestaña visible
            lucide.createIcons();
        }

        // 5. FUNCIONALIDAD: LLAMADA SOS
        function triggerSOS() {
            // Busca el contacto principal y lanza el intent de llamada del teléfono
            const principal = patientData.contactos.find(c => c.principal);
            if(principal) {
                window.location.href = `tel:${principal.telefono}`;
            } else {
                window.location.href = "tel:112"; // Fallback a emergencias
            }
        }

       // 6. FUNCIONALIDAD: MI UBICACIÓN
function shareLocation() {
    const btnText = document.getElementById('loc-btn-text');
    const originalText = btnText.innerText;
    btnText.innerText = "Buscando...";

    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const lat = position.coords.latitude;
                const lon = position.coords.longitude;
                // CORRECCIÓN: URL de Google Maps correcta
                window.open(`https://www.google.com/maps?q=${lat},${lon}`, '_blank');
                
                // CORRECCIÓN: Restaurar el texto del botón tras el éxito
                btnText.innerText = originalText; 
            },
            (error) => {
                alert("No se pudo obtener la ubicación. Por favor, activa el GPS.");
                btnText.innerText = originalText;
            },
            { enableHighAccuracy: true, timeout: 5000 }
        );
    } else {
        alert("La geolocalización no está soportada en este dispositivo.");
        btnText.innerText = originalText;
    }
}

        // 7. FUNCIONALIDAD: SIMULACIÓN NFC
        function toggleNfcOverlay(show) {
            const overlay = document.getElementById('nfc-overlay');
            if (show) {
                overlay.classList.remove('hidden');
                document.getElementById('nfc-title').innerText = "Acerca VitalTip";
                document.getElementById('nfc-desc').innerText = "Mantén el teléfono cerca del dispositivo o pulsera NFC para sincronizar tus datos médicos.";
            } else {
                overlay.classList.add('hidden');
            }
            lucide.createIcons();
        }

        function simulateNFC() {
            toggleNfcOverlay(true);
            
            // Simular un tiempo de escaneo y lectura
            setTimeout(() => {
                document.getElementById('nfc-title').innerText = "¡Datos Actualizados!";
                document.getElementById('nfc-title').classList.add("text-green-400");
                document.getElementById('nfc-desc').innerText = "La información médica ha sido sincronizada correctamente desde el dispositivo NFC.";
                
                // Efecto en el header
                const headerStatus = document.getElementById('header-status');
                headerStatus.innerText = "Sincronizado Hace 1 min";
                headerStatus.classList.replace('text-blue-200', 'text-green-300');
                
                // Ocultar overlay después del mensaje
                setTimeout(() => {
                    toggleNfcOverlay(false);
                    document.getElementById('nfc-title').classList.remove("text-green-400");
                }, 1500);

            }, 2000); // Tarda 2 segundos en "escanear"
        }
