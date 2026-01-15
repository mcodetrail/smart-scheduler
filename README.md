# 🏥 Assistenza Domiciliare - Sistema di Gestione Infermieri

Sistema web completo per la gestione di pazienti e appuntamenti per infermieri che lavorano in assistenza domiciliare.

## ✨ Funzionalità

### 🔐 Autenticazione
- Login e registrazione con username e password
- Sistema sicuro con password hashate (bcryptjs)
- Session management con JWT

### 👥 Gestione Pazienti
- Anagrafica completa (nome, cognome, data di nascita, codice fiscale)
- Dati di contatto (indirizzo, telefono, email)
- Note personalizzate per ogni paziente
- Ricerca rapida per nome, cognome o codice fiscale
- Elenco completo con paginazione

### 📅 Calendario Appuntamenti
- Vista giornaliera e settimanale
- Creazione e modifica appuntamenti
- Durata personalizzabile (15-120 minuti)
- Note per ogni appuntamento
- Statistiche appuntamenti
- **Tracciamento modifiche**: ogni appuntamento traccia chi l'ha creato e chi l'ha modificato per ultimo, con data e ora

### 👨‍⚕️ Collaborazione tra Infermieri
- Ogni infermiere può vedere e modificare gli appuntamenti degli altri
- Sistema di tracciamento che registra l'ultimo infermiere che ha modificato un appuntamento
- Visualizzazione chiara di chi ha fatto cosa e quando

## 🛠️ Stack Tecnologico

- **Framework**: Next.js 15 con App Router
- **Linguaggio**: TypeScript
- **Database**: SQLite (tramite Prisma ORM)
- **Autenticazione**: NextAuth.js v5
- **API**: tRPC per type-safe APIs
- **UI**: Tailwind CSS 4
- **Validazione**: Zod

## 🚀 Setup Iniziale

### 1. Installazione dipendenze

```bash
pnpm install
```

### 2. Creazione database e seed

```bash
# Crea il database e applica le migrazioni
pnpm db:generate

# Popola il database con utenti di test
pnpm db:seed
```

### 3. Configurazione variabili d'ambiente

Il file `.env` è già configurato con:
```env
DATABASE_URL="file:./db.sqlite"
AUTH_SECRET="your-secret-key-here"
```

**IMPORTANTE**: In produzione, cambia `AUTH_SECRET` con una chiave casuale sicura.

### 4. Avvio server di sviluppo

```bash
pnpm dev
```

L'applicazione sarà disponibile su: http://localhost:3000

## 👤 Utenti di Test

Dopo aver eseguito `pnpm db:seed`, puoi accedere con:

### Amministratore
- **Username**: `admin`
- **Password**: `admin123`

### Infermiera
- **Username**: `infermiera1`
- **Password**: `nurse123`

## 📱 Utilizzo

### Primo Accesso
1. Vai su http://localhost:3000
2. Clicca su "Accedi" o usa le credenziali di test
3. Verrai reindirizzato alla dashboard

### Gestione Pazienti
1. Dalla dashboard, clicca su "+ Nuovo Paziente"
2. Compila il form con i dati anagrafici
3. I pazienti appariranno nella lista principale
4. Usa la barra di ricerca per trovare rapidamente un paziente

### Gestione Appuntamenti
1. Clicca su "📅 Calendario" nell'header
2. Scegli la vista (giorno/settimana/mese)
3. Clicca su "+ Nuovo Appuntamento"
4. Cerca e seleziona il paziente
5. Imposta data, ora e durata
6. Aggiungi note se necessario
7. Gli appuntamenti modificati mostreranno chi li ha modificati per ultimo

## 🗂️ Struttura del Progetto

```
medical-app/
├── prisma/
│   ├── schema.prisma          # Schema database
│   ├── seed.ts                # Script di inizializzazione
│   └── migrations/            # Migrazioni database
├── src/
│   ├── app/
│   │   ├── auth/              # Pagine login/registrazione
│   │   ├── dashboard/         # Dashboard e liste pazienti
│   │   │   ├── patients/      # Form pazienti
│   │   │   ├── calendar/      # Calendario appuntamenti
│   │   │   └── appointments/  # Form appuntamenti
│   │   ├── layout.tsx
│   │   └── page.tsx           # Homepage
│   ├── server/
│   │   ├── api/
│   │   │   ├── routers/
│   │   │   │   ├── auth.ts        # Router autenticazione
│   │   │   │   ├── patient.ts     # Router pazienti
│   │   │   │   └── appointment.ts # Router appuntamenti
│   │   │   ├── trpc.ts
│   │   │   └── root.ts
│   │   ├── auth/
│   │   │   ├── config.ts      # Configurazione NextAuth
│   │   │   └── index.ts
│   │   └── db.ts              # Client Prisma
│   └── trpc/                  # Setup tRPC client
└── package.json
```

## 🔒 Sicurezza

- Password hashate con bcryptjs (10 rounds)
- Session JWT-based
- Protezione delle route tramite middleware NextAuth
- Validazione input con Zod
- Prepared statements per prevenire SQL injection

## 📊 Database

### Schema Principale

#### User (Infermiere)
- id, username, password (hashed)
- name, email, role
- Relazioni con pazienti e appuntamenti creati/modificati

#### Patient (Paziente)
- Dati anagrafici completi
- Codice fiscale univoco
- Relazione con l'infermiere che l'ha creato
- Relazione con gli appuntamenti

#### Appointment (Appuntamento)
- Data e ora pianificata
- Durata in minuti
- Status (scheduled, completed, cancelled)
- Note
- **createdBy**: chi ha creato l'appuntamento
- **lastModifiedBy**: chi ha modificato l'appuntamento per ultimo
- **lastModifiedAt**: quando è stato modificato

## 🛠️ Script Disponibili

```bash
# Sviluppo
pnpm dev                 # Avvia server di sviluppo
pnpm build              # Build produzione
pnpm start              # Avvia server produzione

# Database
pnpm db:generate        # Genera Prisma client e applica migrazioni
pnpm db:push            # Sincronizza schema senza migrazione
pnpm db:studio          # Apri Prisma Studio (GUI database)
pnpm db:seed            # Popola database con dati di test

# Code Quality
pnpm lint               # Esegui ESLint
pnpm lint:fix           # Fix automatico ESLint
pnpm typecheck          # Check TypeScript
pnpm format:check       # Check formattazione Prettier
pnpm format:write       # Formatta con Prettier
```

## 🔧 Sviluppo Futuro

Possibili miglioramenti:

- [ ] Vista mensile calendario
- [ ] Notifiche push per appuntamenti
- [ ] Export dati pazienti (PDF/Excel)
- [ ] Dashboard con statistiche avanzate
- [ ] App mobile (React Native/PWA)
- [ ] Gestione documenti/cartelle cliniche
- [ ] Storico visite per paziente
- [ ] Integrazione con sistemi esterni
- [ ] Backup automatico database
- [ ] Multi-tenancy per diverse organizzazioni

## 📝 Note

- Il database SQLite è salvato in `prisma/db.sqlite`
- I log sono visibili nella console del server
- Per resettare il database: elimina `db.sqlite` e riesegui le migrazioni

## 💬 Supporto

Per domande o problemi, contattare il team di sviluppo.

---

Sviluppato con ❤️ per semplificare il lavoro degli infermieri
