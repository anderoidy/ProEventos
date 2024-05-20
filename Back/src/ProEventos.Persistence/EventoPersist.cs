using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ProEventos.Domain;
using Microsoft.EntityFrameworkCore;
using ProEventos.Persistence.Contratos;
using ProEventos.Persistence.Contextos;

namespace ProEventos.Persistence
{
    public class EventoPersist : IEventoPersist
    {
        private readonly ProEventosContext _context;
        public EventoPersist(ProEventosContext context)
        {
            _context = context;            
        }

        public async Task<Evento[]> GetAllEventosAsync(bool includepalestrantes = false)
        {
            IQueryable<Evento> query = _context.Eventos
                .Include(e => e.Lotes)
                .Include(e => e.RedesSociais);            

            if(includepalestrantes) 
            {
                query = query
                   .Include(e => e.PalestrantesEventos)
                   .ThenInclude(pe => pe.Palestrante);
            }

            query = query.OrderBy(e => e.Id);
            
            return await query.ToArrayAsync();  
        }

        public Task<Palestrante[]> GetAllEventosByNomeAsync(string nome, bool includeEventos)
        {
            throw new NotImplementedException();
        }

        public async Task<Evento[]> GetAllEventosByTemaAsync(string tema, bool includepalestrantes  = false)
        {
            IQueryable<Evento> query = _context.Eventos
            .Include(e => e.Lotes)
            .Include(e => e.RedesSociais);            

            if(includepalestrantes) 
            {
                query = query
                   .Include(e => e.PalestrantesEventos)
                   .ThenInclude(pe => pe.Palestrante);
            }

            query = query.OrderBy(e => e.Id).Where(e => e.Tema.ToLower().Contains(tema.ToLower()));
            
            return await query.ToArrayAsync();  
        }

        public async Task<Evento> GetEventoByIdAsync(int eventoId, bool includepalestrantes = false)
        {
                IQueryable<Evento> query = _context.Eventos
                .Include(e => e.Lotes)
                .Include(e => e.RedesSociais);            

            if(includepalestrantes) 
            {
                query = query
                   .Include(e => e.PalestrantesEventos)
                   .ThenInclude(pe => pe.Palestrante);
            }

            query = query.OrderBy(e => e.Id)
                    .Where(e => e.Id == eventoId);
            
            return await query.FirstOrDefaultAsync();  
        }      

        public Task<Evento[]> GetAllEventoByIdAsync(string eventoId, bool includepalestrantes)
        {
            throw new NotImplementedException();
        }

        Task<Evento> IEventoPersist.GetAllEventoByIdAsync(string EventoId, bool includepalestrantes)
        {
            throw new NotImplementedException();
        }
    }
}