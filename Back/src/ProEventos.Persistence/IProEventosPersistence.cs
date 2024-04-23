using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ProEventos.Domain;

namespace ProEventos.Persistence
{
    public interface IProEventosPersistence
    {
        //GERAL
        void Add<T>(T entity) where T: class;
        void Update<T>(T entity) where T: class;
        void Delete<T>(T entity) where T: class;
        void DeleteRange<T>(T[] entity) where T: class;   

        Task<bool> SaveChangesAsync();

        //EVENTOS
        Task<Evento[]> GetAllEventosByTemaAsync(string tema, bool includepalestrantes);
        Task<Evento[]> GetAllEventosAsync(bool includepalestrantes );
        Task<Evento[]> GetAllEventoByIdAsync(string EventoId,  bool includepalestrantes);

        //PALESTRATES
        Task<Palestrante[]> GetAllEventosByNomeAsync(string nome, bool includeEventos);
        Task<Palestrante[]> GetAllPalestrantesAsync(bool includeEventos );
        Task<Palestrante[]> GetAllPalestranteByIdAsync(string PalestranteId,  bool includeEventos);      
    
    }
}