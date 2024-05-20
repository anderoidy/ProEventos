using System.Threading.Tasks;
using ProEventos.Domain;

namespace ProEventos.Persistence.Contratos
{
    public interface IEventoPersist
    {
        Task<Evento[]> GetAllEventosByTemaAsync(string tema, bool includepalestrantes);
        Task<Evento[]> GetAllEventosAsync(bool includepalestrantes );
        Task<Evento> GetAllEventoByIdAsync(string EventoId,  bool includepalestrantes);
        Task<Evento> GetEventoByIdAsync(int id, bool v);
    }
}