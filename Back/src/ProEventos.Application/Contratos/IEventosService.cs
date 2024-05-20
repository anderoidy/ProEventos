using System.Threading.Tasks;
using ProEventos.Domain;

namespace ProEventos.Application.Contratos
{
    public interface IEventoService
    {
        Task<Evento> AddEventos(Evento model);
        Task<Evento> UpdateEvento(int eventoId, string model);
        Task<bool> DeleteEvento(int EventoId);

        Task<Evento[]> GetAllEventosAsync(bool includepalestrantes = false);
        Task<Evento[]> GetAllEventosByTemaAsync(string tema, bool includepalestrantes = false);
        Task<Evento> GetEventoByIdAsync(string EventoId,  bool includepalestrantes = false);
    }
}