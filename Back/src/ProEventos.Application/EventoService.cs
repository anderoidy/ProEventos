using System;                                                                                                                                                                                           
using System.Threading.Tasks;
using ProEventos.Domain;
using ProEventos.Persistence.Contratos;

namespace ProEventos.Application.Contratos
{
    public class EventoService : IEventoService
    {
        private IGeralPersist _geralPersist;
        private IEventoPersist _eventoPersist;

        public EventoService(IGeralPersist geralPersist, IEventoPersist eventoPersist)
        {
            _geralPersist = geralPersist;
            _eventoPersist = eventoPersist;
        }
        public async Task<Evento> AddEventos(Evento model)
        {
            try
            {
                _geralPersist.Add<Evento>(model);
                
                if(await _geralPersist.SaveChangesAsync())
                {                                                                                                                                                                                                                                                                                                                                                                                                                                   
                    return await _eventoPersist.GetEventoByIdAsync(model.Id, false);
                }
                return null;
            } 
            catch (Exception ex)
            {
                throw new Exception(ex.Message);    
            }
        }

       public async Task<Evento> UpdateEvento(int eventoId, string model)
        {
              try 
            {
                var evento = await _eventoPersist.GetEventoByIdAsync(eventoId, false);
                if (evento == null) return null;

                model.Id = evento.Id;

                _geralPersist.Update(model);

                if(await _geralPersist.SaveChangesAsync())
                {
                    return await _eventoPersist.GetEventoByIdAsync(model.Id, false);
                }
                return null;

            } catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }


        public async Task<bool> DeleteEvento(int eventoId)
        {
            try 
            {
                var evento = await _eventoPersist.GetEventoByIdAsync(eventoId, false);
                if (evento == null) throw new Exception("Evento para deletar nao encontrado.");

                _geralPersist.Delete<Evento>(evento);
                
                return await _geralPersist.SaveChangesAsync();
            } 
            catch (Exception ex)
            {
                throw new Exception(ex.Message);
            }
        }

   
        public Task<Evento[]> GetAllEventosAsync(bool includepalestrantes = false)
        {
            throw new NotImplementedException();
        }

        public Task<Evento[]> GetAllEventosByTemaAsync(string tema, bool includepalestrantes = false)
        {
            throw new NotImplementedException();
        }

        public Task<Evento> GetEventoByIdAsync(string EventoId, bool includepalestrantes = false)
        {
            throw new NotImplementedException();
        }


     
        public Task<Evento> GetEventoByIdAsync(int EventoId, bool includepPalestrantes = false)
        {
            throw new NotImplementedException();
        }
    }

}