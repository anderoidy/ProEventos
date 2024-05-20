using System.Threading.Tasks;
using ProEventos.Domain;

namespace ProEventos.Persistence.Contratos
{
    public interface IPalestrantePersist
    {
        Task<Palestrante[]> GetAllEventosByNomeAsync(string nome, bool includeEventos);
        Task<Palestrante[]> GetAllPalestrantesAsync(bool includeEventos );
        Task<Palestrante[]> GetAllPalestranteByIdAsync(string PalestranteId,  bool includeEventos);      
    
    }
}